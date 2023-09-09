import styled from "styled-components"
import Product from "./Product"
import { useState, useEffect } from "react"

import axios from "axios"
import "./App.css"


const Container = styled.div`
    padding: 20px;
    display: flex; 
    // flex-wrap: wrap;
    justify-content: space-between;
    // box-shadow: 20px 20px 10px grey;
    

`

const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( cat ? `http://localhost:5000/api/products?category${cat}`: "http://localhost:5000/api/products");
        console.log(res);
        setProducts(res.data);
      }catch (err) {}
    };
    getProducts()
  },[cat]);


  useEffect(() => {
    cat && 
    setFilteredProducts(
      products.filter(item => 
        Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      )
      )
    );
  }, [products, cat, filters]);

  console.log(filteredProducts);

  useEffect(() => {
    if((sort === "newest")){
      setFilteredProducts((prev)=>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if ((sort === "asc")){
      setFilteredProducts((prev)=>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev)=>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container className="marquee track">
        {cat 
        ? filteredProducts.map((item) => <Product item = {item} key={item.id}/> ) 
        : products
        .slice(0, 4)
        .map((item) => <Product item = {item} key={item.id}/> )}
    </Container>
  )
}

export default Products