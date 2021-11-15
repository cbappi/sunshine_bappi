
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useAuth from '../../hooks/useAuth';


import axios from 'axios';

import { useForm } from "react-hook-form";
import './Placeorder.css';






const ServiceDetail = () => {

    const { user } = useAuth();

    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://frightful-alien-95040.herokuapp.com/booking/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])








    const { register,
         handleSubmit,
          reset,
        formState:{errors},
     } = useForm();

    const onSubmit = data => {
        // console.log(data);
        data.email = user?.email;
        console.log(data);

        axios.post('https://frightful-alien-95040.herokuapp.com/booking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }







    // const ExactIteam = data.filter(td => td.id ===_id);
    return (
        <div>
            <Header></Header>
            <h1>Logged as {user.displayName}</h1>
            <h1>Login Email as {user.email}</h1>

            <h1 style={{ marginTop: '80px', marginBottom: '80px' }}>This is <span style={{ color: 'orange' }}>{data.service_name}</span> Order Detail Page </h1>

            <div className="col-md-6 d-flex justify-content-center container mb-5">
                <div class="card mb-3" >

                    <div>
                        <div className="card-body">

                            <div>
                                <img src={data.img} className="img-fluid" alt="..." />
                            </div>
                            <h5 class="card-title text-danger">Offering Service : {data.service_name}</h5>
                            <h5 class="card-title text-muted">{data.description}</h5>
                            <h5 class="card-title text-info">{data.facilities}</h5>
                            <h5 class="card-title text-info">Price :  ${data.price}</h5>

                        </div>



                        <div className="order-place">
                            <h2>Place Your Order</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={data.service_name}  {...register("service_name", { required: true, maxLength: 400 })} placeholder="offering service" />

                                <input
                                    {...register("name")}
                                    placeholder="Name"

                                />

                                <input
                                    {...register("status")}
                                    placeholder="order status"
                                    defaultValue="pending"

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
export default ServiceDetail;





