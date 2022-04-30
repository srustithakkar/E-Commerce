import React from "react";
import "./item.css";
import {
  connect
} from "react-redux";
import ItemWrapper from "./itemWrapper";

function Items(props) {
  const {
    products
  } = props;
  return ( 
    <div className = "row m-4" > 
      {
        products.map((item,key) => ( 
          <ItemWrapper item = {item} key={key}/>
        ))
      } 
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.ProductReducer.products,
  };
};
export default connect(mapStateToProps, null)(Items);
