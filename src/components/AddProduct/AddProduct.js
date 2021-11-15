import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AddProduct.css';



const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://mysterious-dusk-85739.herokuapp.com/addproduct', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        
        <div className="add-service">
            <h2>Please Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("product_name", { required: true, maxLength: 400 })} placeholder="add product" />

                <input {...register("description", { required: true, maxLength: 400 })} placeholder="describe product" />

                
                <input type="number" {...register("price")} placeholder="Price" />

                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};
<Footer></Footer>
export default AddProduct;