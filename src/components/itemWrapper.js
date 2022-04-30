import React from 'react';
import {CartActions} from "../_actions/cart.action"
import {connect} from "react-redux";
import Item from "./item"

function ItemWrapper(props) {
    const {item, products } = props;
    return (
        <Item addProduct={props.addProduct} products={products} item={item} showButton= {true}/>
    )
}

const mapStateToProps = (state) => {
    const products = state.CartReducer.products
    return {
        products,
        rerender: state.CartReducer.rerender
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addProduct: (product) => dispatch(CartActions.addProduct(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemWrapper);
