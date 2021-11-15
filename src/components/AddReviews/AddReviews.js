import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";






const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://mysterious-dusk-85739.herokuapp.com/addreviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data Added Successfully');
                    reset();
                }
            })
    }

    return (
        
        <div className="add-service">
            <h2>Please put your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("product_name", { required: true, maxLength: 400 })} placeholder="Add product" />

                <input {...register("review_des", { required: true, maxLength: 400 })} placeholder="Describe your review" />

                
                <input type="number" {...register("star")} placeholder="Put rating by number" />

                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};



export default AddReviews;