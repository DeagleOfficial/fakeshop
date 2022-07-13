// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { useState, useEffect } from 'react';

const App = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
    const parsedData = await data.json()
    setLoading(false)
    setItems(parsedData)
    console.log(parsedData)
  }

  useEffect(() => {
      fetchItems()
  }, [])

  if (loading) return <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}><h5>loading...</h5></div>

  return (
    <div className="App">


      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path = "/" element = { <Products items = {items}/> }></Route>
          <Route exact path="/:id" element = { <ProductDetails /> }></Route>
        </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
