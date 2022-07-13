import React from "react";
import './Navbar.css';

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to = {`/`} style={{ textDecoration: 'none' }}>
            <a className="navbar-brand text-success" href="#">
                <b>FakeShop</b>
                <i className="fa-brands fa-shopify nav-link"></i>
            </a>
            </Link>
            
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">


                <li className="nav-item active">
                <Link to = {`/`} style={{ textDecoration: 'none' }}>
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </Link>
                </li>
                

                <li className="nav-item">
                
                <a className="nav-link" href="#"  data-toggle="modal" data-target="#myModal">About</a>


                <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                        <h4 className="modal-title">
                            About &nbsp;
                            <span className="text-success">
                                <b>FakeShop</b> &nbsp;
                                <i className="fa-brands fa-shopify"></i>
                            </span>
                        </h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className="modal-body">
                        <b className="text-success">FakeShop</b> is an ecommerce company fetching products from the Fakestore API. Click on the <span className="btn btn-sm btn-success">Details</span> button on any product to view more information about the product.
                    </div>

                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success btn-sm" data-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
                </div>
                </li>

                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;