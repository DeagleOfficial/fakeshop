import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-success text-center text-lg-start mt-auto fixed-bottom">
        {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            <a className="text-light">&copy; Copyright 2022 FakeShop Inc.</a>
        </div>
        {/* <!-- Copyright --> */}
        </footer>
    )
}

export default Footer