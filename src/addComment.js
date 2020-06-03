import React from "react";
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
export class addComment extends React.Component {
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
        let updates = {}
        updates['/post' + this.props.name + '/' + this.props.currLikes] = newCount;
        console.log(this.props);
        return firebase.database().ref().update(updates);
        };
    
    
    render() {
        return <button onClick={this.addLike}>
            <FontAwesomeIcon icon={faHeart} />
             {this.state.likes}
         </button>
    }
}