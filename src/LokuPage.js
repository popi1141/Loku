import React, {Component }  from 'react';
import {Card, Row, Col, Container, Spinner} from 'react-bootstrap';
import './App.css';
import _ from 'lodash';
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
import Dislike from './LikeDislikeButtons';
import CommentBox from './commentBox';

//Creates the restaurant page
export class LokuPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      storeData: undefined,
      comment: []
    };
  }

  //Calls Firebase When Component Is Mounted
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

  cardComments(data) {
    let dataset = data.data.Reviews;
    let reviewsss = Object.keys(dataset);

    // creating list of comments
    let commentSet = reviewsss.map((key) => {
      let object = dataset[key];
      return <ReviewCard reviewData={object} key={object.Reviewer}/>;
    });

    return commentSet;
  }

  render() {
    let data = this.state.storeData;
    console.log(data);
    //While data is loading
    if(!data) return <Spinner animation="grow" variant="success" className="bigSpinner"/>                                                                                 
    let imgPath = "/img/" + data.Name + ".jpg";

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
              <li><Dislike path={this.props.history.location.pathname} name={data.Name} currLikes={data.Likes} disabled={false}></Dislike></li>
            </ul>
          </Col>
        </Row>
        <hr/>
        <CommentBox path={this.props.history.location.pathname}></CommentBox>
        <this.cardComments data={data}></this.cardComments>
      </Container>
    );
  }
}

//Creates a single review card
export class ReviewCard extends Component {
  render() {
    return (
      <Container>
        <Card className="mb-2">
          <Card.Body> 
            <Card.Title>{this.props.reviewData.Reviewer}</Card.Title>
            <Card.Text>{this.props.reviewData.ReviewText}</Card.Text>
          </Card.Body> 
        </Card>
      </Container>
    );
  }
}

export default LokuPage;