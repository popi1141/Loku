import React from "react";
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
import {Button} from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class LikeButton extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {likes: this.props.currLikes};
    }

    addLike = () => {
        let newCount = this.state.likes + 1;
            this.setState({
                likes: newCount
            });
        let pathValues = this.props.path.split('/');
        let queryPath = pathValues[2] + '/' + pathValues[3];
        console.log(newCount);
        var query = firebase.database().ref(queryPath).orderByChild("Name").equalTo(pathValues[4]);
            query.once("child_added", function(snapshot) {
            snapshot.ref.update({ Likes: newCount})
        });
    };
    
    componentDidMount() {

    }
    
    render() {
        return (
            <div>
                <button type="button" class="btn btn-success" onClick={this.addLike}>
                <FontAwesomeIcon icon={faHeart} /> Likes: {this.state.likes}
                </button>
            </div>
        )
    }
}