import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "./products"

function AddProduct() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0)
  const [visibleInputs, setVisibleInputs] = useState(false)

  const [productArray, setproductArray] = useState([])
  console.log("productArray", productArray)

  const productsa = [
    { name: "product 1", price: 10 },
    { name: "product 2", price: 20 },
    { name: "product 3", price: 30 },
    { name: "product 4", price: 40 },
  ]

  const dispatch = useDispatch()

  function handleProduct() {
    const selectedProduct = productsa[selectedProductIndex]
    dispatch(addProduct(selectedProduct))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault() // prevent form submission to server
    const formData = new FormData(event.target)
    const newData = {
      name: formData.get("name"),
      price: formData.get("price"),
    }
    setproductArray([productArray, newData])
    setVisibleInputs(false)
    event.target.reset() // clear form inputs
  }

  return (
    <div>
      <h2>Add Product</h2>
      <select
        value={selectedProductIndex}
        onChange={(e) => setSelectedProductIndex(Number(e.target.value))}
      >
        {productsa.map((product, index) => (
          <option key={index} value={index}>
            {product.name} (${product.price})
          </option>
        ))}
      </select>
      <button onClick={handleProduct}>Add</button>
      <button onClick={() => setVisibleInputs(!visibleInputs)}>
        Add new products
      </button>
      {visibleInputs ? (
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Price:
            <input type="number" name="price" required />
          </label>

          <button type="submit">Submit</button>
        </form>
      ) : null}
      <p>{visibleInputs.toString()}</p>
    </div>
  )
}

export default AddProduct
