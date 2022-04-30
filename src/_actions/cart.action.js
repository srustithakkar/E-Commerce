import cartConstants from '../_constants/cart.constants';

export const CartActions = {
    addProduct,
}

function addProduct(product) {
    return {
        type: cartConstants.ADD_PRODUCT,
        payload: product
    }
}

