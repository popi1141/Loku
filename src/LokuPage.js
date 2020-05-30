import React, { useState, Fragment, Component }  from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import './App.css';

export class LokuPage extends Component {
  render() {
    //let storeData = this.props.storeData;
    //let imgURL = "img/" + storeData.Name.toLowerCase() + ".jpg";
    return (
      <Fragment>
        <Row>
          <Col md="4">
            <img src="img/farm1.jpg" className="img-fluid rounded"/>
          </Col>
          <Col md="8">
            <h1> Farm Nation </h1>
            <p> Pickup and Contactless Takeout </p>
            <ul>
              <li> Location: </li> 
              <li> Hours: </li> 
              <li> Description: </li> 
              <li> Rating: </li> 
            </ul>
          </Col>
      </Row>
      </Fragment>
    );
  }
}

export default LokuPage;
