import React from "react";
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class LikeButton extends React.Component {
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
            this.refs.btn.setAttribute("disabled", "disabled");
        }
    };
    
    componentDidMount() {

    }
    
    render() {
        return (
                <button type="button" ref="btn" className="btn btn-success" onClick={this.addLike}>
                <FontAwesomeIcon icon={faHeart} /> Likes: {this.state.likes}
                </button>
        )
    }
}