import React, { useContext } from 'react'
import { StoreContext } from '../Contex/storecontext'

const Cart = () => {

  const { food_list, cartItem, removeFromcart } = useContext(StoreContext)

  return (
    <div>
      <div>
        <div>
          <p>Item</p>
          <p>Title</p>
          <p>Quantity</p>
          <p>TOtal</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

      </div>
    </div>
  )
}

export default Cart