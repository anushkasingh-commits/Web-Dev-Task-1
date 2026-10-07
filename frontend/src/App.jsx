import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';
import "./ProductList.css";

export default function App() {

  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function APICall() {
      console.log("Hi, Anushka!")
      let response = await fetch("http://localhost:3000/api/products")
      let data = await response.json();
      console.log(data);
      setProducts(data);
    }
    APICall();
  }, []);

  return (
    <div>
      <h1>Lorem ipsum dolor sit.{count} </h1>
      <h1>Lorem ipsum dolor sit.{num} </h1>
      <button onClick={() => setCount(count + 1)}>Click Count</button>
      <button onClick={() => setNum(num + 1)}>Click Num</button>
      <ProductList products={products} />
    </div>
  )
}
