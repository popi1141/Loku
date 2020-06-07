import React, {Component} from "react";
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
import {Form, Button} from 'react-bootstrap';

export default class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: "",
            name: ""
        };
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCommentChange(event) {
        this.setState({
            comment: event.target.value
        });
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault(); // don't submit
        let newComment = {
            ReviewText: this.state.comment,
            Reviewer: this.state.name
        }
        // getting path to database location
        let pathValues = this.props.path.split('/');
        let queryPath = pathValues[2] + '/' + pathValues[3];
        // adding new comment to firebase
        var query = firebase.database().ref(queryPath).orderByChild("Name").equalTo(pathValues[4]);
                query.once("child_added", function(snapshot) {
                snapshot.ref.child("Reviews").push(newComment);
        });
        //empty out post for next time
        this.setState({comment: "", name: ""});
      }
    
    render() {
        return (
            <div className="comment-box">
                <h3> Add a Review! </h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <label for="inputName">Name</label>
                        <Form.Control id="inputName" type="text" ref="nameInput" placeholder="Insert name" value={this.state.name}  onChange={this.handleNameChange}/>
                        <br />
                        <label for="inputComment">Comment</label>
                        <Form.Control id="inputComment" type="text" as="textarea" ref="commentInput" placeholder="Insert comment here" value={this.state.comment} onChange={this.handleCommentChange} />
                    </Form.Group>
                    <Button type="submit" value="Submit" variant="success" ref="submitButton"> Submit </Button>
                </Form>
            </div>
        );
    }
}