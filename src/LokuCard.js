import React, { useState, Fragment, Component }  from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Button, Toast, Container, Jumbotron, FormControl, Card, Row, CardColumns, Col} from 'react-bootstrap';
import './App.css';

export class LokuCard extends Component {
  render() {
    let storeData = this.props.storeData;
    return (
      <Card className="mb-3">
        <Row noGutters={true}>
          <Col md="4">
            <Card.Img src = {storeData.imgURL}/>
          </Col>
          <Col md="8">
            <Card.Body>
              <Card.Title>
                {storeData.storeTitle}
              </Card.Title>
              <Card.Text>
                {storeData.storeDesc}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default LokuCard;
