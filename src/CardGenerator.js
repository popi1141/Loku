import React, { Component }  from 'react';
import './App.css';
import {Card, Row, Col, Container, Alert} from 'react-bootstrap';
import { Redirect} from 'react-router-dom'; //use switch around routes so you don't need if/else statements


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
        let imgURL = "/img/" + storeData.Name + ".jpg";

        if(this.state.shouldRedirect) {
        return <Redirect push to={"/lokupage/" + city + "/" + category + "/" + storeData.Name} />
        } 

        return (
        <Card className="mb-3" onClick={this.handleClick}>
            <Row noGutters={true}>
            <Col md="4">
                <Card.Img src = {imgURL} alt="the business being discussed"/>
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

export default CardGenerator;