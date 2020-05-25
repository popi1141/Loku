import React, { useState, Fragment, Component }  from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Button, Toast, Container, Jumbotron, FormControl, Card, Row, CardColumns, Col} from 'react-bootstrap';
import './App.css';
import LokuCard from './LokuCard';

export class CardGenerator extends Component {
  render() {
    let cards = this.props.data.map((store) => {
      return <LokuCard storeData={store} key={store.storeTitle}></LokuCard>;
    });
    return (
      <Fragment>
        {cards}
      </Fragment>
    );
  }
}

export default CardGenerator;

