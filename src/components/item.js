import React from 'react';
import { Card , Button, Container} from 'react-bootstrap';
import {find, isEmpty} from "lodash";

function Item(props) {
    const {item, products , showButton } = props;
    const handleAdd = () => {
        props.addProduct(item);
    }
    const getCartQuantity= () =>{
        const cartProduct = find(products, {productName: item.productName});
        if (isEmpty(cartProduct)){
            return 0
        } else {
            return cartProduct.qty
        }
    }
    return (
        <div className="col-4 text-center mb-1">
            <Card>
                <Card.Body>
                    <Card.Title>{item.productName}</Card.Title>
                    <span className="mb-1">
                        <Card.Title>$ {item.price}</Card.Title>
                    </span>
                </Card.Body>
                <Card.Body className="pt-0">
                    <Container >
                        <div className="row">
                            <div className="col-12 text-center mt-0 p-0">
                                <span><input style={{width: 40}} className="mt-1 ml-2 mr-2" type="number" id="item" value={getCartQuantity()}  readOnly></input></span>
                            </div>
                        </div>
                        { showButton && showButton == true ?  <span><Button onClick={handleAdd} variant="info" className="w-100 mt-2 " md={4}>Add to Cart</Button></span>: <div></div>}
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item;