import { SHOW_PRODUCTS } from './types';
import request from 'superagent';

export const showProducts = (item) => dispatch => {
    const API = `http://www.liverpool.com.mx/tienda?s=${item}&d3106047a194921c01969dfdec083925=json`;
    request
    .get(API)
    .then(response => {
        if(response.body.contents === undefined) {
            dispatch({
                type: SHOW_PRODUCTS,
                payload: [{
                    productDisplayName: 'PRODUCTO',
                    productPrice: 'NO ENCONTRADO',
                    "sku.thumbnailImage": 'https://unifor88.ca/wp-content/uploads/2018/01/oops.jpg'
                }]
            })
        } else {
            dispatch({
                type: SHOW_PRODUCTS,
                payload: response.body.contents[0].mainContent[3].contents[0].records
            })
        }   
    })
    .catch(error => {
        console.log(error);
    })
}