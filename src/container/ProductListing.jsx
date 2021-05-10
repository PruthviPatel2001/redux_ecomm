import React,{useEffect} from 'react'
import ProductComponent from './ProductComponent'
import { useSelector,useDispatch } from 'react-redux';
import {setProducts} from '../redux/actions/productActions'
import axios from 'axios'

const ProductListing = () => {

    const products = useSelector((state) => state.allproducts.products);

    const dispatch = useDispatch();

        const fetchproducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("err", err)
        });

            dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchproducts();
    },[])
    console.warn("iProducts data",products)

    return (
        
            <div className="mx-5 my-5">
             <ProductComponent/>   
            </div>
        
    )
}

export default ProductListing
