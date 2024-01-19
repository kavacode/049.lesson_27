import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { card } = this.props;

    return (
      <div className="card">
        <img src={card.image} alt={card.title} className="image" />
        <h2>{card.title}</h2>
        <p>{card.message}</p>
      </div>
    );
  }
}

export default Card;
