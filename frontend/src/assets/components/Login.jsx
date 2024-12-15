import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);  

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
             onClick={()=> document.getElementById("my_modal_3").close()}>
              ✕
            </Link>
          
          <h3 className="font-bold text-lg md:text-start text-center">Login Page</h3>
          <div className="mt-4 space-y-2">
            <h4>Email</h4>
            <input type="email" placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("email", { required: true })}></input><br/>
             {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
  
          <div className="mt-4 space-y-2">
            <h4>Password</h4>
            <input type="text" placeholder="Enter your password"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("password", { required: true })}></input><br/>
             {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="flex justify-around mt-4">
            <button className="bg-lime-700 text-white px-3 py-1 rounded-md hover:bg-lime-900 duration-300 cursor-pointer">Login</button>
            <p>Not registered? <Link to="/signup"className="underline text-blue-500 cursor-pointer">Signup</Link></p>
          </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
