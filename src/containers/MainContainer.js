import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    displayStocks:[],
    all: [],
    filter: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(stocks => this.setState({
        stocks: stocks,
        displayStocks: stocks,
      }))
  }

  addToPortfolio = (props) => {
    if (!this.state.portfolio.find(obj => obj.id === props.id)) {
      this.setState({ portfolio: [...this.state.portfolio, props] })
    } else {
      alert('Already purchased!')
    }
  }

  removeFromPortfolio = (props) => {
    this.setState({
      portfolio: this.state.portfolio.filter(obj => obj.id !== props.id)
    })
  }

  filterStocks = (categoryValue) => {
      this.setState({
        displayStocks: this.state.stocks.filter(obj => obj.type === categoryValue)
      })
  }


  sortByName = () => {
    this.setState({
      displayStocks: this.state.displayStocks.sort((a,b) => a.name.localeCompare(b.name))
    })
  }

  sortByPrice = () => {
    this.setState({
      displayStocks: this.state.displayStocks.sort((a, b) => a.price > b.price ? 1 : -1)
    })
  }

  render() {
    // console.log(this.state.portfolio)
    if (this.state.stocks === null) {
      return <h1 > Loadding... </h1>
    }
    return (
      <div>
        <SearchBar
          filterStocks={this.filterStocks}
          sortByName={this.sortByName}
          sortByPrice={this.sortByPrice}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.state.displayStocks}
                addToPortfolio={this.addToPortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks={this.state.portfolio}
                removeFromPortfolio={this.removeFromPortfolio}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
