import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
export default function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);  
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
         
          <h3 className="font-bold text-lg md:text-start text-center">
            Signup Page
          </h3>
          <div className="mt-4 space-y-2">
            <h4>Name</h4>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            ></input>
            <br/>
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <h4>Email</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            ></input>
            <br/>
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mt-4 space-y-2">
            <h4>Password</h4>
            <input
              type="text"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            ></input>
            <br/>
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="text-xl flex justify-around mt-5">
            <button className="bg-lime-700 text-white px-3 py-1 rounded-md hover:bg-lime-900 duration-300 cursor-pointer">
              Signup
            </button>
            <p>
              Have account?{" "}
              <button
               
                className="underline text-blue-500 cursor-pointer"
                onClick={()=> document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>{" "}
              <Login/>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
