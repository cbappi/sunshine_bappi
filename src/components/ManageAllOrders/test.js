import React from "react";
import { useState, useEffect } from "react";

import "./Events.css";
const ManageAllOrders = () => {
    const [orders, setOrder] = useState([]);

    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch("https://mysterious-dusk-85739.herokuapp.com/manageallorders")
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`https://mysterious-dusk-85739.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setConrol(!control);
                    alert('Do you want to drlete data?');
                } else {
                    setConrol(false);
                }



            });



        console.log(id);
    };

    return (
        <div className="container">
            <h1>All Orders - {orders?.length}</h1>


            {orders?.map((pd) => (

                <div className="row d-flex justify-content-center mb-2 ">

                    <div className="col-md-1 col-sm-12 border border-info ">{pd.name}</div>
                    <div className="col-md-3 col-sm-12 border border-info">{pd.email}</div>
                    <div className="col-md-2 col-sm-12 border border-info">{pd.product_name}</div>
                    <div className="col-md-2 col-sm-12 border border-black">{pd.address}</div>
                    <div className="col-md-1 col-sm-12 border border-black bg-warning">{pd.status}</div>
                    <div className="col-md-1 col-sm-12 border border-black">
                        <button
                            onClick={() => handleDelete(pd._id)}
                            className="btn bg-danger p-2"
                        >
                            Delete
                        </button>
                    </div>
                </div>

            ))}

        </div>
    );
};

export default ManageAllOrders;
