import React from 'react'

// Components
import Listing from './Listing'
import Header from './Header'
import Cart from './Cart'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      target: 'listing'
    }
  }
  render() {
    return (
      <div className='app'>
      <Header />
      {this.state.target === 'listing'
      ? <Listing />
      : <Cart />
      }
      </div>
    )
  }
}
