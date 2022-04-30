import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Navigation(props) {
    const cartQty = props.products.length;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                CorpTech
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            Cart<span className="badge badge-pill badge-info">{cartQty}</span>
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
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
export default connect(mapStateToProps)(Navigation);
