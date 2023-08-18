import React from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function DeleteProduct(props) {  //function taking in a single prop

    const { productId, removeFromDom} = props;  //destructed the prop object which i can use a product id to delete the object, and a cb function once it is done
    const navigate = useNavigate();
    const deleteProduct = e => {  //once its clicked axios will delete the product, and the callback will run
        axios
            .delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                removeFromDom(productId)
                
            })
            .catch((err) => console.log(err));
    }
    return (
        <>
            <button onClick={deleteProduct} className="btn btn-danger ml-5"> Delete</button>
        </>
    )
}

export default DeleteProduct
