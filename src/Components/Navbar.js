import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component{

render(){

    return (
        <div className="navbar">
            <nav>
                <div className="nav-wrapper cyan darken-4">
                    <div className="container">
                        <Link to="/" className="brand-logo">Logo</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                        <ul className=" navbar__list right hide-on-med-and-down">
                            <li><Link to="/">Shop</Link></li>
                            <li><Link to="/cart">Mycart</Link></li>
                            <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                            {this.props.items.length ? <li className="navbar__counter"><h2 id="counter__text">{this.props.items.reduce((a,b)=> a+b,0)}</h2></li> : ""}
                        </ul>
                        <ul className="sidenav" id="mobile-demo">
                            <li><Link to="/">Shop</Link></li>
                            <li><Link to="/cart">Mycart</Link></li>
                            <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems.map(item=>item.quantity)
    }
}

export default connect(mapStateToProps)(Navbar);