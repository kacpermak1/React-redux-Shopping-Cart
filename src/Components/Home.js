import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/index'

class Home extends Component {

    handleClick = (id) => {
        this.props.addToCart(id)
    }

    render() {

        let itemList = this.props.items.map(item => {
            return (
                <div className="col s4" key={item.id}>
                    <div className="card" >
                        <div className="card-image">
                            <img src={item.img} alt={item.title} />
                            <span className="card-title">{item.title}</span>
                            <span onClick={() => { this.handleClick(item.id) }} to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="container">
                <h2 className="center">Shop</h2>
                <div className="row">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);