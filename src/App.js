import React, { useState, Fragment, Component }  from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Button, Toast, Container, Jumbotron, FormControl, Card, Row, CardColumns, Col} from 'react-bootstrap';
import './App.css';

const EXAMPLE_STORES = [  
  { imgURL: 'img/farm1.jpg',  storeTitle: 'Potato Corner', storeDesc: 'insertNameHere'},
  { imgURL: 'img/farm2.jpg',  storeTitle: 'Turnip Town', storeDesc: 'insertNameHere'},
  { imgURL: 'img/farm3.jpg',  storeTitle: 'Radish Central', storeDesc: 'insertNameHere'}
];


export class LokuNav extends Component {
  render() {
    return (
      <Navbar variant="dark" expand="lg" bg="green">
        <Navbar.Brand href="#home">
          <img
          alt=""
          src="img/minilogo.png"
          width="60"
          height="30"
          className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Select A City" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Seattle</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Tacoma</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Select A Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Food</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.2">Crafts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.2">Produce</NavDropdown.Item>
            </NavDropdown>
            <Button variant="light">Search</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

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

export class App extends Component {
  render() {
    return (
      <Fragment>
        <LokuNav/> 
        <CardGenerator data={EXAMPLE_STORES}/>
      </Fragment>
    );
  }
}

export default App;


// class Start extends React.Component {
//   get show() {
//     return this.props.activeSection === "start";
//   }

//   render() {
//     if (this.show) {
//       return <div className="start"> Start </div>;
//     } else {
//       return null;
//     }
//   }
// }

// class About extends React.Component {
//   get show() {
//     return this.props.activeSection === "about";
//   }

//   render() {
//     if (this.show) {
//       return <div className="about"> About </div>;
//     } else {
//       return null;
//     }
//   }
// }

// class Skills extends React.Component {
//   get show() {
//     return this.props.activeSection === "skills";
//   }

//   render() {
//     if (this.show) {
//       return <div className="skills"> Skills </div>;
//     } else {
//       return null;
//     }
//   }
// }

// class Contact extends React.Component {
//   get show() {
//     return this.props.activeSection === "contact";
//   }

//   render() {
//     if (this.show) {
//       return <div className="contact"> Contact </div>;
//     } else {
//       return null;
//     }
//   }
// }

// const Buttons = ({ onToggle }) => (
//   <div className="buttons">
//     <button name="start" onClick={onToggle}>
//       Start
//     </button>
//     <button name="about" onClick={onToggle}>
//       About
//     </button>
//     <button name="skills" onClick={onToggle}>
//       Skills
//     </button>
//     <button name="contact" onClick={onToggle}>
//       Contact
//     </button>
//   </div>
// );

// const Main = ({ activeSection }) => (
//   <React.Fragment>
//     <Start activeSection={activeSection} />
//     <About activeSection={activeSection} />
//     <Skills activeSection={activeSection} />
//     <Contact activeSection={activeSection} />
//   </React.Fragment>
// );

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeSection: ""
//     };

//     this.handleToggleSection = this.handleToggleSection.bind(this);
//   }

//   handleToggleSection(e) {
//     const { name } = e.target;
//     this.setState(() => ({
//       activeSection: name
//     }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <Buttons onToggle={this.handleToggleSection} />
//         <Main activeSection={this.state.activeSection} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// export default App;