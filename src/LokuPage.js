import React, {Component }  from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap';
import './App.css';
import _ from 'lodash';
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";

export class LokuPage extends Component {
  constructor(props){
    super(props);
    this.state = {storeData: undefined};
  }

  componentDidMount() {
    let city = this.props.match.params.cityName; 
    let category = this.props.match.params.categoryName; 
    let businessName = this.props.match.params.businessName; 
    let firebaseRef = firebase.database().ref();
    firebaseRef.once('value', (snapshot) => {
        let database = snapshot.val();
        let storeObj =  _.find(database[city][category], {Name: businessName});
        this.setState({storeData: storeObj});
    });
  }

  render() {
    let data = this.state.storeData;
    if(!data) return <h1>No store specified</h1>
    let imgPath = "/img/" + this.state.storeData.Name + ".jpg";
    return (
      <Container fluid className="restosection">
        <Row>
          <Col md="4">
            <img src={imgPath} className="img-fluid rounded" alt="the business in question"/>
          </Col>
          <Col md="8">
            <h1> {data.Name} </h1>
            <p className="deliverytext"> Pickup and Contactless Takeout </p>
            <ul>
              <li> Location: {data.Location} </li> 
              <li> Hours: {data.Hours} </li> 
              <li> Description: {data.Description} </li> 
              <li> Rating: {data.Stars} </li> 
            </ul>
          </Col>
        </Row>
        <hr/>
        <Card className="mb-2">
          <Card.Body> 
            <Card.Title>{data.Reviewer1}</Card.Title>
            <Card.Text>{data.Review1}</Card.Text>
          </Card.Body> 
        </Card>
        <Card className="mb-2">
          <Card.Body> 
            <Card.Title>{data.Reviewer2}</Card.Title>
            <Card.Text>{data.Review2}</Card.Text>
          </Card.Body> 
        </Card>
      </Container>
    );
  }
}

export default LokuPage;
