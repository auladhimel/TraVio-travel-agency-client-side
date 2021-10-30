import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageAllOrder = () => {
    const[manageAllOrder, setManageAllOrder]=useState([])
    const [isDelete, setIsDelete] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/bookings')
        .then(res=>res.json())
        .then(data=>setManageAllOrder(data))
    },[isDelete]);

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        if (result.deletedCount) {
            setIsDelete(true);
          } else {
            setIsDelete(false);
          }
      });
      };
    return (
        <div>
            <h1>manage order</h1>
            <div className="all-bookings">
                <div className="row container text-center justify-content-center">
                     {manageAllOrder.map((manageOrders, index)=>(
                         <div className="col-md-3 service justify-content-center">
             
                         <Card style={{ width: '18rem'}} className="fullcard" >
                           <Card.Img className="card-img" variant="top" src={manageOrders?.image} />
                           <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                               <Card.Title>{manageOrders?.name}</Card.Title>
                               <Card.Text>
                                   <span id="description">
                               <small>{manageOrders?.description}</small></span><br/>
                               <p><b>${manageOrders?.price}</b></p><br/>
                               
                                <Link to={`/update/${manageOrders._id}`}>
                               <button  className="btn btn-primary m-2">Update</button></Link>
                               <button onClick={()=>handleDelete(manageOrders._id)} className="btn btn-danger m-2">Delete</button>
                               {/* <button className="btn btn-primary">Click here to book</button> */}
                               
                               </Card.Text>  
                           </Card.Body>
                           
                           </Card>
                           
                       </div>
                     ))}
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;