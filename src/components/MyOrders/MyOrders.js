
import React, { useState } from "react";
import useFirebase from "../../hooks/useFirebase";
import { useEffect } from "react";


const MyOrders = () => {
    const { user } = useFirebase();

    const [control, setConrol] = useState(false);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://mysterious-dusk-85739.herokuapp.com/myorders/${user?.email}`)

            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user.email, control]);

    console.log(orders);

    //Delete Handler
    const handleDelete = (id) => {
        fetch(`https://mysterious-dusk-85739.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setConrol(!control);
                    alert('Do you want to delete data?');
                } else {
                    setConrol(false);
                }



            });


    };


    return (
        <div>



            <div className="mb-5 mt-5">
                <h1>My Order List : {orders?.length}</h1>

                {orders?.map((pd) => (

                    <div className="row d-flex justify-content-center">
                        <div className="col-md-2 border border-info">{pd.name}</div>
                        <div className="col-md-3 border border-info">{pd.email}</div>

                        <div className="col-md-2 border border-info">{pd.product_name}</div>
                        <div className="col-md-2 border border-info">{pd.address}</div>
                        <div className="col-md-1 border border-info bg-warning">{pd.status}</div>
                        <div className="col-md-2 border border-info">
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
        </div>

    );
};

export default MyOrders;
