import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useForm } from "react-hook-form";
//import './Placeorder.css';


const ProductDetailsExplore = () => {

    const { user } = useAuth();
    const { register,
        handleSubmit,
        reset,
        formState: { errors }, } = useForm();

    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://mysterious-dusk-85739.herokuapp.com/booking-explore/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    const onSubmit = data => {
        // console.log(data);
        data.email = user?.email;
        data.status="pending";
        console.log(data);

        axios.post('https://mysterious-dusk-85739.herokuapp.com/booking-explore', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <Header></Header>
            <h1>Logged as {user.displayName}</h1>
            <h1>Login Email as {user.email}</h1>

            <h1 style={{ marginTop: '80px', marginBottom: '80px' }}>This is <span style={{ color: 'orange' }}>{data.product_name}</span> Order Detail Page </h1>

            <div className="col-md-6 d-flex justify-content-center container mb-5">
                <div class="card mb-3" >

                    <div>
                        <div className="card-body">

                            <div>
                                <img src={data.img} className="img-fluid" alt="..." />
                            </div>
                            <h5 class="card-title text-danger">Offering Service : {data.product_name}</h5>
                            <h5 class="card-title text-muted">{data.description}</h5>
                            
                            <h5 class="card-title text-info">Price :  ${data.price}</h5>

                        </div>



                        <div className="order-place">
                            <h2>Place Your Order</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>


                                
                                <input
                                    {...register("product_name" , {required: true, maxLength: 400 })}
                                   
                                   
                                    defaultValue={data.product_name}

                                />
                  

                                <input
                                    {...register("name")}
                                    defaultValue={user.displayName}

                                />
                                <input
                                    {...register("email")}
                                    defaultValue={user.email}

                                />

                                <input
                                    {...register("phone_number")}
                                    placeholder="Enter Phone Number"
                                   

                                />



                                <input {...register("address", { required: true })} placeholder="enter you address" />
                                <input type="submit" />



                            </form>
                        </div>

                    </div>
                </div >

            </div >


            <Footer></Footer>
        </div>
    );

};
export default ProductDetailsExplore;





