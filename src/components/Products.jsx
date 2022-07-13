import React from "react";
import './Products.css';
import { Link } from 'react-router-dom';

const Products = (props) => {
    
    return (
        <>
        <div className="row products">
            {props.items.map(item => (
                <div className="card-container col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                <img className="card-img-top" src={item.image} alt = "item" style = {{height: "300px"}}></img>
                <div className="card-body">

                    <p className="card-text">{item.title.length > 20? item.title.substring(0,20) + "..." : item.title}</p>
                    <p className="card-text"><b>{"$" + item.price}</b></p>

                    <Link to={`/${item.id}`}>
                        <p className="btn btn-sm btn-success">Details</p>
                    </Link>
                </div>
                </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Products