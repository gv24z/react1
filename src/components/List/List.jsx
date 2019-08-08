import './List.css';
import React, { Component, Fragment } from 'react';

// stateless
export default function (props) {
    const { items } = props;
    return(
        <ul>
            {items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
    )
}