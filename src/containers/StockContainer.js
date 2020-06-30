import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map((stock, i) => ((
            <Stock
              key={i}
              id={stock.id}
              ticker={stock.ticker}
              name={stock.name}
              price={stock.price}
              stockAction={this.props.addToPortfolio}
            />
          )))
        }
      </div>
    );
  }

}

export default StockContainer;
