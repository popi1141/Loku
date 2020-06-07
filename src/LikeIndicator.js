import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class LikeIndicator extends Component {
    render() {
        return (
                <Button type="button" ref="btn" variant="success disabled" aria-disabled="true">
                <FontAwesomeIcon icon={faHeart}/> &nbsp;  {this.props.currLikes}
                </Button>
        )
    }
}

export default LikeIndicator;