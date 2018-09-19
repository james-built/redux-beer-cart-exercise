import React from 'react'

// Components
import CartListItem from './CartListItem'

const CartList = () => (
<table>
  <thead>
    <tr>
      <th>Beer</th>
      <th>Quantity</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    <CartListItem />
  </tbody>
</table>
)

export default CartList