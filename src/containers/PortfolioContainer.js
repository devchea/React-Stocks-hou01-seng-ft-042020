import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    // console.log(this.props.stocks)
    return (
      <div>
        <h2>My Portfolio</h2>
          {//render your portfolio stocks here
            this.props.stocks.map((stock, i) => (
                < Stock
                  key={i}
                  id={stock.id}
                  ticker={stock.ticker}
                  name={stock.name}
                  price={stock.price}
                  stockAction={this.props.removeFromPortfolio}
                />
            ))
          }
      </div>
    );
  }

}

export default PortfolioContainer;
