import React, { Component }  from 'react';
import './App.css';
import {Card, Row, Col, Container, Alert, Spinner} from 'react-bootstrap';
import { Redirect} from 'react-router-dom'; //use switch around routes so you don't need if/else statements
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
import LikeIndicator from './LikeIndicator';

//Generates the card section
export class CardGenerator extends Component {
  constructor(props){
    super(props);
    this.state = {
      firebaseRef: firebase.database().ref()
    };
  }
  
  //For Initial Call
  componentDidMount() {
    let city = this.props.city; 
    let category = this.props.category; 
    this.state.firebaseRef.on('value', (snapshot) => {
      let database = snapshot.val();
      let storeObj = database[city][category];
      this.setState({categoryData: storeObj});
    });
  }

  //For Future Calls
  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city || this.props.category !== prevProps.category) {
      let city = this.props.city; 
      let category = this.props.category; 
      this.state.firebaseRef.on('value', (snapshot) => {
        let database = snapshot.val();
        let storeObj = database[city][category];
        this.setState({categoryData: storeObj});
      });
    }
  }

  render() {
      let city = this.props.city;
      let category = this.props.category;
      let categoryData = this.state.categoryData;
      if(!categoryData) return <Spinner animation="grow" variant="success" className="bigSpinner"/>     
      let cards = categoryData.map((store) => {
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

//Creates a sole restaurant card
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
        console.log(this.props);
        let url = "/lokupage/" + city + "/" + category + "/" + storeData.Name;
        if(this.state.shouldRedirect) {
          return <Redirect push to={url} />
        } 
        return (
        <Card className="mb-3 restocard" onClick={this.handleClick}>
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
                    <br></br>
                    <LikeIndicator path={url} name={this.props.storeData.Name} currLikes={this.props.storeData.Likes}></LikeIndicator>
                </Card.Text>
                </Card.Body>
            </Col>
            </Row>
        </Card>
        );
    }   
}

export default CardGenerator;