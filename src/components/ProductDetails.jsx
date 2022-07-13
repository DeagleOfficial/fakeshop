import React from "react";
import './ProductDetails.css';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; 


const ProductDetails = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        fetchItem()
    }, [])

    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const parsedData = await data.json()
        setLoading(false)
        setItem(await parsedData)
        console.log(parsedData)
    }

    if (loading) return <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}><h5>loading...</h5></div>

    return (
        <div>
            
            <div className="container" style={{display: "block"}}>
            <div className="row product-details">
                <div className="col-xl-6 col-lg-6 col-md-6 product-details-img-container" style={{textAlign: "center"}}>
                <img src={item.image} alt="responsive webite" className="img-fluid product-details-img"></img>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                <h2><b>{item.title}</b></h2>
                <p className="btn btn-sm btn-success">{item.category}</p>
                <p>{item.description}</p>
                <p><b>Buy: ${item.price}</b></p>
                <p style={{display: "flex", alignItems: "center"}}>
                    {item.rating.rate} &nbsp;
                    <i className="fa-solid fa-star text-success"></i> &nbsp;
                    ({item.rating.count} reviews)
                </p>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default ProductDetails