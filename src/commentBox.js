import React, {Component} from "react";
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
import {Row, Col, Form} from 'react-bootstrap';

export default class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: 'Here is space to write down your comments',
            name: 'name'
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
        this.setState({
            comment:'',
            name: ''
        }); 
      }
    
    
    render() {
        return (
            <div>
                <h3>Comments Box</h3>
                <form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} className="mb-2" controlId="formPlaintextPassword">
                        <Form.Label column sm="1"> Name </Form.Label>
                        <Col sm="11">
                        <Form.Control type="Name" placeholder={this.state.name} onChange={this.handleNameChange}/>
                        </Col>
                    </Form.Group>
                    
                    <textarea type="text" className="form-control mb-2" 
                    placeholder={this.state.comment} onChange={this.handleCommentChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}