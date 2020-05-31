import React, {Component, Fragment}  from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import './App.css';

export class SplashPage extends Component {
    render() {
        return (
            <Fragment>
                 <Jumbotron className="frontjumbo">
                     <Container>
                        <h1 className="display-1"> Meet Loku </h1>
                        <h4> Find local businesses. Love local, support local. </h4>
                     </Container>
                </Jumbotron>
            </Fragment>
        );
    }
}

 export default SplashPage;