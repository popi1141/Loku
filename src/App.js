import React, { useState, Fragment, Component }  from 'react';
import './App.css';
import LokuPage from './LokuPage';
import {Card, Row, Col, Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import { Route, Switch, Link, NavLink, Redirect} from 'react-router-dom'; //use switch around routes so you don't need if/else statements

const EXAMPLE_STORES = [  
  { imgURL: 'img/farm1.jpg',  storeTitle: 'Potato Corner', storeDesc: 'insertNameHere'},
  { imgURL: 'img/farm2.jpg',  storeTitle: 'Turnip Town', storeDesc: 'insertNameHere'},
  { imgURL: 'img/farm3.jpg',  storeTitle: 'Radish Central', storeDesc: 'insertNameHere'}
];

export class App extends Component {
  render() {
    let SeattleData = this.props.SeattleData;
    let TacomaData = this.props.TacomaData;
    return (
      <Fragment>
        <LokuNav/> 
        <Switch>
          <Route exact path ="/" render={(routerProps) => (
            <CardGenerator {...routerProps} data={SeattleData.Food} title="Food Places in Seattle"/>
          )}/>
          <Route path ="/seattle/food" render={(routerProps) => (
            <CardGenerator {...routerProps} data={SeattleData.Food} />
          )}/>
          <Route path ="/seattle/produce" render={(routerProps) => (
          <CardGenerator {...routerProps} data={SeattleData.Produce} />
          )}/>
          <Route path ="/seattle/crafts" render={(routerProps) => (
            <CardGenerator {...routerProps} data={SeattleData.Crafts} />
          )}/>
          <Route path ="/tacoma/food" render={(routerProps) => (
            <CardGenerator {...routerProps} data={TacomaData.Food} />
          )}/>
          <Route path ="/tacoma/produce" render={(routerProps) => (
            <CardGenerator {...routerProps} data={TacomaData.Produce} />
          )}/>
          <Route path ="/tacoma/crafts" render={(routerProps) => (
            <CardGenerator {...routerProps} data={TacomaData.Crafts} />
          )}/>
          <Route path ="/lokupage" component={LokuPage}/>
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
    console.log(this.props.data);
    let cards = this.props.data.map((store) => {
      return <LokuCard storeData={store} key={store.Name}/>;
    });
    return (
      <Fragment>
        {cards}
      </Fragment>
    );
  }
}

export class LokuCard extends Component {
  render() {
    let storeData = this.props.storeData;
    let imgURL = "/img/" + storeData.Name.toLowerCase() + ".jpg";
    return (
      <Card className="mb-3">
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