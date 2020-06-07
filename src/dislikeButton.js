import React from "react";
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
import { faHeart, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Dislike extends React.Component {
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
                <button type="button" ref="btnY" className="btn btn-success" onClick={this.addLike}>
                <FontAwesomeIcon icon={faThumbsUp} /></button>
                <button type="button" ref="btnN" className="btn btn-success" onClick={this.addDislike}>
                <FontAwesomeIcon icon={faThumbsDown} /> </button>
            </div>
                
        )
    }
}