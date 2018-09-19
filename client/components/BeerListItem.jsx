import React from 'react'

const BeerListItem = (props) => (
  <div className='beer'>
    <p className='name'>{props.name}</p>
    <p className='description'>A {props.style} from {props.brewery}</p>
    <p>
      <span className='country'>{props.country}</span>
      <span className='abv'>{props.abv}abv</span>
      <a href='' className='cart-link'>Add to cart</a>
    </p>
  </div>
)

export default BeerListItem