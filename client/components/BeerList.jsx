import React from 'react'

// Components
import BeerListItem from './BeerListItem'

const BeerList = (props) => (
props.beersList.map((beer) => (
  <BeerListItem
  key={beer.id}
  name={beer.name}
  style={beer.style}
  brewery={beer.brewery}
  country={beer.country}
  abv={beer.abv}
  />
))
)

export default BeerList