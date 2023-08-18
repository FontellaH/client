import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";


const UpdateProduct = (props) => {  //updating the product
    const navigate = useNavigate(); //navigating to different routes
    const { id } = props;
    const [loaded, setLoaded] = useState(false);
    const [product, setProduct] = useState("");

    useEffect(() => {  //updating one product by id
        axios.get('http://localhost:8000/products/' + id)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
    }, [id])

    const updateProduct = (product) => {
        axios
            .put(`http://localhost:8000/products/${id}/edit`, product)
            .then((res) => console.log(res))
            .then(() => props.navigate('/products')); 
    };

    return (
        <div className="row mt-5">
            <div className="col-lg-2 mx-auto">
                <h2>Update a Product</h2>

                {loaded && (  //checking to make sure the code is true
                    <ProductForm  //
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}  //passing the prop name of the product
                        initialPrice={product.price} //providing the price 
                        initialDescription={product.description} //describing the product
                    />
                )}

            </div>
        </div>
    );
}

export default UpdateProduct;