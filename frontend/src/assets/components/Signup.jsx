import React from "react";
import { Link, Navigate, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios"
import  { toast } from 'react-hot-toast';

export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
      }
      await axios.post("http://localhost:4001/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success("Signup Succesfully");
          // <Navigate to="/" />
          navigate(from,{replace:true});
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }).catch((err)=>{
        if(err.response){
          console.log(err)
          toast.error("Error: " + err.response.data.message)
        }
      })
    };  
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
              {...register("fullname", { required: true })}
            ></input>
            <br/>
            {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
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
