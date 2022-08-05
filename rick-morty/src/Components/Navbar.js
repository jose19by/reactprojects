import React from "react";

const Navbar =({title})=>{
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
            <h1 href="/" className="text-white text-uppercase navbar-brand">{title}</h1>
            </div>
        </nav>
    )
}

export default Navbar;