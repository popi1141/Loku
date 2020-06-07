import React, {Component} from "react";
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
import {Button} from 'react-bootstrap';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class LikeDislike extends Component {
    constructor(props){
        super(props);
        this.state = {likes: this.props.currLikes};
    }

    addLike = () => {
        if(!this.props.disabled) {
            let newCount = this.state.likes + 1;
                this.setState({
                    likes: newCount
                });
            let pathValues = this.props.path.split('/');
            let queryPath = pathValues[2] + '/' + pathValues[3];
            var query = firebase.database().ref(queryPath).orderByChild("Name").equalTo(pathValues[4]);
                query.once("child_added", function(snapshot) {
                snapshot.ref.update({ Likes: newCount})
            });
        }
        this.refs.btnY.setAttribute("disabled", "disabled");
        this.refs.btnN.setAttribute("disabled", "disabled");
    };

    addDislike = () => {
        if(!this.props.disabled) {
            let newCount = this.state.likes - 1;
                this.setState({
                    likes: newCount
                });
            let pathValues = this.props.path.split('/');
            let queryPath = pathValues[2] + '/' + pathValues[3];
            var query = firebase.database().ref(queryPath).orderByChild("Name").equalTo(pathValues[4]);
                query.once("child_added", function(snapshot) {
                snapshot.ref.update({ Likes: newCount})
            });
        }
        this.refs.btnN.setAttribute("disabled", "disabled");
        this.refs.btnY.setAttribute("disabled", "disabled");
    };
    
    render() {
        return (
            <div>
                <p>Likes: {this.state.likes}</p>
                <Button ref="btnY" variant="success" className="spacer" onClick={this.addLike}>
                <FontAwesomeIcon icon={faThumbsUp} /></Button>
                <Button ref="btnN" variant="success" onClick={this.addDislike}>
                <FontAwesomeIcon icon={faThumbsDown} /> </Button>
            </div>
                
        )
    }
}