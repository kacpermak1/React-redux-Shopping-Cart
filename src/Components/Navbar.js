import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="nav-wrapper orange lighten-2">
            <div className="container">
                <Link to="/" className="brand-logo">Shopping</Link>

                <ul className="right">
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">Mycart</Link></li>
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;