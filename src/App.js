import React, { useState, Fragment, Component }  from 'react';
import './App.css';
import LokuPage from './LokuPage';
import {Card, Row, Col, Navbar, Nav, NavDropdown, Container, Alert} from 'react-bootstrap';
import { Route, Switch, Link, Redirect} from 'react-router-dom'; //use switch around routes so you don't need if/else statements
import LikeButton from './likeButton'

const EXAMPLE_STORES = [  
  { imgURL: 'img/farm1.jpg',  storeTitle: 'Potato Corner', storeDesc: 'insertNameHere'},
  { imgURL: 'img/farm2.jpg',  storeTitle: 'Turnip Town', storeDesc: 'insertNameHere'},
  { imgURL: 'img/farm3.jpg',  storeTitle: 'Radish Central', storeDesc: 'insertNameHere'}
];

export class App extends Component {
  render() {
    let SeattleData = this.props.Data.Seattle;
    let TacomaData = this.props.Data.Tacoma;
    return (
      <Fragment>
        <LokuNav/>
        <Switch>
          <Route exact path ="/" render={(routerProps) => (
            <CardGenerator {...routerProps} data={SeattleData.Food} city="Seattle" category="Food"/>
          )}/>
          <Route path ="/seattle/food" render={(routerProps) => (
            <CardGenerator {...routerProps} data={SeattleData.Food} city="Seattle" category="Food"/>
          )}/>
          <Route path ="/seattle/produce" render={(routerProps) => (
          <CardGenerator {...routerProps} data={SeattleData.Produce} city="Seattle" category="Produce"/>
          )}/>
          <Route path ="/seattle/crafts" render={(routerProps) => (
            <CardGenerator {...routerProps} data={SeattleData.Crafts} city="Seattle" category="Crafts"/>
          )}/>
          <Route path ="/tacoma/food" render={(routerProps) => (
            <CardGenerator {...routerProps} data={TacomaData.Food} city="Tacoma" category="Food"/>
          )}/>
          <Route path ="/tacoma/produce" render={(routerProps) => (
            <CardGenerator {...routerProps} data={TacomaData.Produce} city="Tacoma" category="Produce"/>
          )}/>
          <Route path ="/tacoma/crafts" render={(routerProps) => (
            <CardGenerator {...routerProps} data={TacomaData.Crafts} city="Tacoma" category="Crafts"/>
          )}/>
          <Route path ="/lokupage/:cityName/:categoryName/:businessName" component={LokuPage}/>
          <Redirect to="/seattle/food" />
        </Switch>
      </Fragment>
    );
  }
}

export class LokuNav extends Component {
  render() {
    return (
      <Navbar variant="dark" expand="lg" bg="green">
        <Navbar.Brand href="/">
          <img
          alt=""
          src="/img/minilogo.png"
          width="60"
          height="30"
          className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Select A Category" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/seattle/food"> Seattle - Food</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/seattle/crafts">Seattle - Crafts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/seattle/produce"> Seattle - Produce</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tacoma/food"> Tacoma - Food</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tacoma/crafts">Tacoma - Crafts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tacoma/produce"> Tacoma - Produce</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export class CardGenerator extends Component {
  render() {
    let city = this.props.city;
    let category = this.props.category;
    let cards = this.props.data.map((store) => {
      return <LokuCard storeData={store} city={city} category={category} key={store.Name}/>;
    });
    return (
      <Container fluid>
        <Alert variant="success" className="alertSpacer"> Showing {category} recommendations in {city} </Alert>
        {cards}
      </Container>
    );
  }
}

export class LokuCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      shouldRedirect: false,
    };
  }

  handleClick = () => {
    this.setState({shouldRedirect: true});
  }

  render() {
    let storeData = this.props.storeData;
    let city = this.props.city;
    let category = this.props.category;
    let imgURL = "/img/" + storeData.Name.toLowerCase() + ".jpg";

    if(this.state.shouldRedirect) {
      return <Redirect push to={"/lokupage/" + city + "/" + category + "/" + storeData.Name} />
    } 

    return (
      <Card className="mb-3" onClick={this.handleClick}>
        <Row noGutters={true}>
          <Col md="4">
            <Card.Img src = {imgURL}/>
          </Col>
          <Col md="8">
            <Card.Body>
              <Card.Title>
                {storeData.Name}
              </Card.Title>
              <Card.Text>
                {storeData.Description}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }
}


export default App;