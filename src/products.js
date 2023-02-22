const initialState = {
  products: [],
}

const ADD_PRODUCT = "ADD_PRODUCT"
const REMOVE_PRODUCT = "REMOVE_PRODUCT"

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}

export function removeProduct(index) {
  return {
    type: REMOVE_PRODUCT,
    payload: index,
  }
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProducts = [...state.products, action.payload]
      localStorage.setItem("products", JSON.stringify(newProducts))
      return {
        ...state,
        products: newProducts,
      }

    case REMOVE_PRODUCT:
      const products = state.products.filter(
        (product, index) => index !== action.payload
      )
      localStorage.setItem("products", JSON.stringify(products))
      return {
        ...state,
        products,
      }
    default:
      return state
  }
}
