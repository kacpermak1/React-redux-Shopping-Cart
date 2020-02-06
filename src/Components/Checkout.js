import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addShipping, subtractShipping } from './actions'

class Checkout extends Component {

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    componentWillUnmount() {
        if (this.inputRef.current.checked)
            this.props.subtractShipping()
    }

    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.subtractShipping();
        }
    }

    render() {

        return (
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref={this.inputRef} onChange={this.handleChecked} />
                            <span>Shipping(+6$)</span>
                        </label>
                    </li>
                    <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn">Checkout</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch(addShipping()) },
        subtractShipping: () => { dispatch(subtractShipping()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)