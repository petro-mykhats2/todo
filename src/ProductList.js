import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeFromCart, changeQuantity } from "./products"

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cartItems)

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
  }

  const handleChangeQuantity = (product, newQuantity) => {
    dispatch(changeQuantity(product, newQuantity))
  }

  const cartTotal = cartItems.reduce(
    (total, currentItem) => total + currentItem.price * currentItem.quantity,
    0
  )

  return (
    <div>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <div>Корзина пуста</div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name}
              <button
                onClick={() => handleChangeQuantity(item, item.quantity - 1)}
              >
                -
              </button>
              {item.quantity}
              <button
                onClick={() => handleChangeQuantity(item, item.quantity + 1)}
              >
                +
              </button>
              ${item.price}${item.price * item.quantity}
              <div>
                <button onClick={() => handleRemoveFromCart(item)}>
                  Видалити
                </button>
              </div>
              <hr />
            </li>
          ))}
          <li>
            <div>Загальна вартість:</div>
            <div>${cartTotal}</div>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Cart
