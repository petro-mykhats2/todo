import React from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "./products"

const ProductList = () => {
  const dispatch = useDispatch()

  const products = [
    { id: 1, name: "Продукт 1", price: 10 },
    { id: 2, name: "Продукт 2", price: 20 },
    { id: 3, name: "Продукт 3", price: 30 },
    { id: 4, name: "Продукт 4", price: 40 },
  ]

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div>
      <h2>Список товарів</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>{product.name}</div>
            <div>${product.price}</div>
            <button onClick={() => handleAddToCart(product)}>
              Додати в корзину
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
