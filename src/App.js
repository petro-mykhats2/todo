import React from "react"
import { legacy_createStore as createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import cartReducer from "./products"
import ProductList from "./AddProduct"
import Cart from "./ProductList"
import ContactForm from "./CartOrder"

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  localStorage.setItem("cart", JSON.stringify(store.getState()))
  return result
}

const savedState = JSON.parse(localStorage.getItem("cart")) || {
  cartItems: [],
  total: 0,
}
const store = createStore(
  cartReducer,
  savedState,

  applyMiddleware(localStorageMiddleware)
)

function App() {
  return (
    <Provider store={store}>
      <div>
        <ProductList />
        <Cart />
        <ContactForm />
      </div>
    </Provider>
  )
}

export default App
