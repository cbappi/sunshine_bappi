import React from "react";
import { useState, useEffect } from "react";


const ManageProducts = () => {
    const [explores, setExplores] = useState([]);

    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch("https://mysterious-dusk-85739.herokuapp.com/explores")
            .then((res) => res.json())
            .then((data) => setExplores(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`https://mysterious-dusk-85739.herokuapp.com/deleteExplores/${id}`, {
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
            <h1>All Explor - {explores?.length}</h1>


            {explores?.map((pd) => (

                <div className="row d-flex justify-content-center mb-2 ">

               
                    <div className="col-md-2 col-sm-12 border border-info">{pd.product_name}</div>
                    <div className="col-md-2 col-sm-12 border border-info">{pd.price}</div>
                
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

export default ManageProducts;
