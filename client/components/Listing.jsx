import React from 'react'

// Components
import BeerList from './BeerList'

// Data
import beers from '../../data/beers.js'

export default class Listing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      beers: beers.beers
    }
  }
  render() {
    return (
      <BeerList beersList={this.state.beers}/>
    )
  }
}