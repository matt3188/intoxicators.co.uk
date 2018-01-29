import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = props => (
  <Link className="card" to={props.linkTo}>
    <div style={{ backgroundImage: `url(${props.image})` }} />
    <h3 className="heading">{props.title}</h3>
  </Link>
);

export default Card;
