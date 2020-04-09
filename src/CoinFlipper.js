import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.types = ["heads", "tails"];
    this.state = {
      flips: 0,
      heads: 0,
      tails: 0,
      urlType: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    let randInd = Math.floor(Math.random() * 2);
    this.setState((curState) => ({
      flips: curState.flips + 1,
      heads: randInd === 0 ? curState.heads + 1 : curState.heads,
      tails: randInd === 0 ? curState.tails : curState.tails + 1,
      urlType: this.types[randInd],
    }));
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div>
        <Coin
          flips={this.state.flips}
          heads={this.state.heads}
          tails={this.state.tails}
          imgUrl={`https://tinyurl.com/react-coin-${this.state.urlType}-jpg`}
        />
        <button onClick={this.handleClick}>FLip Coin!</button>
      </div>
    );
  }
}

export default CoinFlipper;
