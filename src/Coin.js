import React, { Component } from "react";

class Coin extends Component {
  static defaultProps = {
    flips: 0,
    heads: 0,
    tails: 0,
  };
  render() {
    return (
      <div>
        <h1>Let's Flip A Coin!</h1>
        <img src={this.props.imgUrl} alt="" height="150" width="150" />
        <p>{`Out of ${this.props.flips} flips there have been ${this.props.heads} heads and ${this.props.tails} tails`}</p>
      </div>
    );
  }
}

export default Coin;
