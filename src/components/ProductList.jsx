import React, { useEffect, useState } from "react";
import axios from 'axios';
import DeleteProduct from './DeleteProduct'; // Make sure the import path is correct
import { useNavigate } from "react-router-dom";

const ProductsList = (props) => {
    // const [products, setProducts] = useState(props.products);
    const {products} = props;
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:8000/api/products")
    //         .then(response => {
    //             console.log("from react" + response.data);
    //             setProducts(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching products:', error);
    //         });
    // }, []);

    return (
        <div className="row mt-3">
            <div className="col-lg-2 text-center mx-auto mt-3">
                <h1>Products List: </h1>
                {products.map(product => 
                    <div key={product._id}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <DeleteProduct productId={product._id} removeFromDom = {props.removeFromDom}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsList;
