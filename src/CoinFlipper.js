import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flips: 0,
      heads: 0,
      tails: 0,
      urlType: "",
    };
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
      </div>
    );
  }
}

export default CoinFlipper;
