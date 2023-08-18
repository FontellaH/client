import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

import DeleteProduct from '../components/DeleteProduct';


const ViewProduct = (props) => {

    const [product, setProduct] = useState({})

    useEffect(() => {  //storing the product by using the id from the prop
        axios
            .get("http://localhost:8000/api/products/:id")
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [props.id]);

    return (
        <div className="container mt-5 text-center">
            <h3>{product.title}</h3>

            {/* //showing the price */}
            <p>Price: ${product.price}</p>

            {/* //showing the desription */}
            <p>Description: {product.description}</p>
            
            {/* made a button to update the product */}
            <Link to={`/products/${product._id}/edit`} className="btn btn-primary mr-1"> Update Product</Link>

            <DeleteProduct
                productId={product._id} // passing the product ID... 
                successCallback={() => props.navigate('/products')} //then After deletion, go back to the products list.
            />
        </div>
    );
}

export default ViewProduct;