import React from "react";
import { render } from "react-dom";

// get our fontawesome imports
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class LikeButton extends React.Component {
    state = {
        likes: 0
        };
    
    addLike = () => {
        let newCount = this.state.likes + 1;
            this.setState({
            likes: newCount
        });
        };
    
    render() {
        return <button onClick={this.addLike}>
            <FontAwesomeIcon icon={faHeart} />
             {this.state.likes}
         </button>
    }
}