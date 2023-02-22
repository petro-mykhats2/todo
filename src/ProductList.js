import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeProduct } from "./products"

function ProductList() {
  const products = useSelector((state) => state.products)

  const dispatch = useDispatch()

  function handleRemoveProduct(index) {
    dispatch(removeProduct(index))
  }

  const totalAmount = products.reduce(
    (total, product) => total + product.price,
    0
  )

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name}: {product.price}
            <button onClick={() => handleRemoveProduct(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <p>Total Amount: {totalAmount}</p>
    </div>
  )
}

export default ProductList
