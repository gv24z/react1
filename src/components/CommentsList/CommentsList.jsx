import './CommentsList.css';
import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';

export default class CommentsList extends Component {
   constructor(props) {
        super(props);

        this.state = {}
    }


    render() {
        const { comments } = this.props;
        console.log(1);
        return(
            <ul className="CommentsList">
                {comments.map(({name, body}, idx) => <li key={idx}><h3>{name}</h3><p>{body}</p> </li>)}
            </ul>
        )
    }
}