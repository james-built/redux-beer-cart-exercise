import React from 'react'

// Components
import CartList from './CartList'

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
      <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>
      <CartList />
      </div>
    )
  }
}
