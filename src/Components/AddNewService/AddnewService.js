import React from 'react';
import { useForm } from "react-hook-form";

const AddnewService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
      
      fetch(`http://localhost:5000/bookings`,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(data)
      })
      .then((res)=>res.json())
      .then((result)=>console.log(result));
      console.log(data);
    };

    return (
        <div>
            <h1>add a new service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input {...register("example")} placeholder="gfgfg"/><br/> */}
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("id", { required: true })} required placeholder="ID" /><br/>

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("name", { required: true })} required placeholder="Name" /><br/>

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("description", { required: true })} required placeholder="Description" /><br/>

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register( "image",{ required: true })} required placeholder="Image" /><br/>
      
      {/* include validation with required or other standard HTML validation rules */}
      <input type="number" {...register("price",  { required: true })} required placeholder="Price" /><br/>
      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddnewService;