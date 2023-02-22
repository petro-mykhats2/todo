import React from "react"
import { legacy_createStore as createStore } from "redux"
import { Provider } from "react-redux"
import productsReducer from "./products"
import AddProduct from "./AddProduct"
import ProductList from "./ProductList"

const savedProducts = localStorage.getItem("products")
const store = createStore(
  productsReducer,
  savedProducts
    ? {
        products: JSON.parse(savedProducts),
      }
    : undefined
)

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddProduct />
        <ProductList />
      </div>
    </Provider>
  )
}

export default App
