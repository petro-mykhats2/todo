// import React from "react"
// import { legacy_createStore as createStore } from "redux"
// import { Provider } from "react-redux"
// import cartReducer from "./products"
// import ProductList from "./AddProduct"
// import Cart from "./ProductList"

// const store = createStore(
//   cartReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// // import ProductList from "./ProductList"
// // import Test from "./Test"

// // const savedProducts = localStorage.getItem("products")
// // const store = createStore(
// //   productsReducer,
// //   savedProducts
// //     ? {
// //         products: JSON.parse(savedProducts),
// //       }
// //     : undefined
// // )

// // const store = createStore(
// // cartReducer
// //   savedProducts
// //     ? {
// //         products: JSON.parse(savedProducts),
// //       }
// //     : undefined
// // )

// function App() {
//   return (
//     <Provider store={store}>
//       <div>
//         {/* <AddProduct />
//         <ProductList /> */}
//         <ProductList />
//         <Cart />

//         {/* <Test /> */}
//       </div>
//     </Provider>
//   )
// }

// export default App

import React from "react"

import { legacy_createStore as createStore, applyMiddleware } from "redux"
// import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import cartReducer from "./products"
import ProductList from "./AddProduct"
import Cart from "./ProductList"

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  localStorage.setItem("cart", JSON.stringify(store.getState()))
  return result
}

const savedState = JSON.parse(localStorage.getItem("cart")) || {
  cartItems: [],
  total: 0,
}
// const savedProducts = localStorage.getItem("cart")
// console.log("savedState", savedState)
const store = createStore(
  cartReducer,
  // savedProducts
  // ? {
  //     cartItems: JSON.parse(savedProducts),
  //   }
  // : undefined,
  savedState,

  applyMiddleware(localStorageMiddleware)
)

function App() {
  return (
    <Provider store={store}>
      <div>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  )
}

export default App
