import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = () => {  //defined my component

    const [products, setProducts] = useState([]); //hold my array of products
    const [loaded, setLoaded] = useState(false); //determines if it loaded
  
    useEffect(() => { //fetching the data from the function
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
            setProducts(res.data);
            setLoaded(true);
        });
    }, []); // this is listening for any changes in the data


    const removeFromDom = (productId) => { //using the id to remove the product
        setProducts(products.filter((product) => product._id != productId));  // filtering the array and removing item by id and asking to update once its done
    };

    const createProduct = newProduct => {
        axios
            .post("http://localhost:8000/api/products", newProduct)  // Include the newProduct data in the request
            .then((response) => {
                // Assuming response.data contains the newly created product
                setProducts([...products, response.data]);  // Add the new product to the existing products
                setLoaded(false);  // Reset the loaded state
            })
            .catch((error) => {
                console.error("Error", error);
            });
    };

    return (
        // creating a new product
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div>
                    <h2>Product Manager</h2> 
                    <ProductForm
                        onSubmitProp={createProduct}
                        initialTitle=""
                        initialPrice=""
                        initialDescription=""
                    />
                </div>
            </div>
            <hr />
            {loaded && (
                <ProductList products={products} removeFromDom={removeFromDom} />
            )}
        </div>
    );
};

export default Main;