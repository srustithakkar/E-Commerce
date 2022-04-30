import React, { useState } from "react";
import "./item.css";
import { connect } from "react-redux";
import { CartActions } from "../_actions/cart.action";
import Item from "./item";
import Nav from "./nav";
import Promos from "../_helpers/promo.json" 

function Cart(props) {
    const [warning, setWarning] = useState('')
    const [code, setCode] = useState('');
    const { products } = props;
    const [discountAmount, setDiscountAmount] = useState('')
    let total = 0;
    let discount;

    const totalPrice = (products) => {
        products.forEach((product) => {
        total = total + product.price * product.qty;
        });
        return total.toFixed(2);
    };

    const handlePlaceOrder = () => {
        alert("Order placed successfully!!!")
    };
    
    const handleApply = () => {
        for( var i = 0; i < Promos.promo.length; i++ ){
            if( Promos.promo[ i ].promoCode === code ){
                setWarning("");
                discount = (( total * Promos.promo[ i ].discount ) / 100).toFixed(2);
                setDiscountAmount(discount)
            break;
            }else{
                setWarning("Please Enter Valid Code")
                setDiscountAmount(0)
            }
        };
    }

    const paymentTotal = (total) => {
        if(discountAmount && discountAmount !== 0){
            total = (total - discountAmount).toFixed(2)
        }
        return total;
    }

const OnCodeChange = (e) => {
        setCode(e.target.value)
    }
    return (
        <div>
            <Nav />
            <div className="row m-4">
                {products.map((item, key) => (
                <Item addProduct={props.addProduct} products={products} item={item} key={key} showButton={false}/>
                ))}
            </div>
            <div>
            { warning ? <b className= "text-danger" > {warning} </b> :
                <div></div> 
            }
            </div>
            <div className="card-footer bg-transparent d-flex align-items-center">
                <div>Apply Coupon</div>
                <input type="text" className="ml-2 font-weight-light pl-2" placeholder="Enter coupon code" onChange={OnCodeChange}></input>
                <button className="btn btn-info font-weight-bolder ml-2 " onClick={handleApply}>Apply</button>
            </div>
            <div className="text-right"> Total: $ {totalPrice(products)} </div>
            { discountAmount ? <div className="text-right"> Discount Amount {discountAmount} </div> :
                    <div></div> 
                }
            <div className="card-footer text-center d-flex justify-content-end">
                <h4 className="font-weight-bold mr-5 "> ${paymentTotal(total)}</h4>
                <button
                type="button"
                className="btn btn-info font-weight-bolder"
                onClick={handlePlaceOrder}
                >
                Place Order
                </button>{" "}
            </div>
        </div>
    );
}

    const mapStateToProps = (state) => {
    const products = state.CartReducer.products;
    return {
        products,
        rerender: state.CartReducer.rerender,
    };
    };

    const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch(CartActions.addProduct(product)),
    };
};

    export default connect(mapStateToProps, mapDispatchToProps)(Cart);
