"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";


import { useForm, SubmitHandler } from 'react-hook-form';
import { useRegistrationUserMutation } from "@/redux/slices/authApi";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";

type Inputs = {
  email: string;
  password: string;
  name: string;
  phone: string;
  code: string;
};


const Registration = () => {

  const [registration] = useRegistrationUserMutation()
  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await registration(data)
    console.log(res.data.fullUser)
    if (res) {
      dispatch(setUser(res.data.fullUser));
      router.push('/')
    }

  };






  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white shadow-lg rounded-3xl">
      {/* Title */}
      <h1 className="mb-2 text-2xl font-extrabold">Registration</h1>
      <p className="mb-10 text-[#737780]">Login to access your travelwise  account</p>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Name */}
        <label className=" text-base font-normal text-[#444955]">Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Input your name"
          className="w-full border mt-2 mb-4 border-[#D0D1D4] rounded-lg p-3 text-sm focus:outline-none"
        />

        {/* Email Address */}
        <label className=" text-base font-normal text-[#444955]">Email Address</label>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Enter your email"
          className="w-full border mt-2 mb-4 border-[#D0D1D4] rounded-lg p-3 text-sm focus:outline-none"
        />

        {/* Phone Number Section */}
        <label className="text-base font-normal text-[#444955]">Phone Number</label>
        <div className="flex items-center mb-4">
          <select {...register("code")} className="p-3 mt-2 mb-2  border-2 border-r-0 border-[#D0D1D4] rounded-l-lg text-sm bg-white focus:outline-none">
            <option value="+880">+880</option>
            <option value="+1">+1</option>
            <option value="+91">+91</option>
            {/* Add more country codes as needed */}
          </select>
          <input

            {...register("phone", { required: true })}
            type="text"
            placeholder="174034309"
            className="w-full p-3 mt-2 mb-2 border border-[#D0D1D4] rounded-r-lg text-sm focus:outline-none"
          />
        </div>


        {/* Password Field */}
        <label className="text-base font-normal text-[#444955] pb-2">Password</label>
        <div className="relative">
          <input
            {...register("password", { required: true })}
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full border mt-2 mb-4 border-[#D0D1D4] rounded-lg p-3 text-sm focus:outline-none"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-0 px-3 py-2 text-xl text-gray-500 top-3"
          >
            {passwordVisible ? <LuEyeOff /> : <LuEye />}
          </button>
        </div>


        {/* Login Button */}
        <button type="submit" className="w-full px-4 py-2 mb-4 font-extrabold text-white rounded-lg bg-primary">
          Registration
        </button>

      </form>

      {/* Registration Text */}
      <p className="text-base text-center text-[#444955]">
        Already have an account?  <Link href='/login' className="text-primary">Login</Link>
      </p>
      <p className="text-base text-center text-[#737780] my-4">
        Or registration with
      </p>

      {/* iPhone Buttons */}
      <div className="flex justify-between gap-4 ">
        <button className="flex items-center justify-center w-1/2 px-4 py-3 border rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M24 12.0733C24 5.40546 18.6274 0 12 0C5.37262 0 0 5.40536 0 12.0733C0 18.0994 4.38825 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9166 4.71615 14.6575 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3398 7.92313 13.875 8.85381 13.875 9.80864V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6117 23.0943 24 18.0995 24 12.0733Z" fill="#1877F2" />
          </svg>
        </button>
        <button className="flex items-center justify-center w-1/2 px-4 py-3 border rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107" />
            <path d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z" fill="#FF3D00" />
            <path d="M12.0002 22.0003C14.5832 22.0003 16.9302 21.0118 18.7047 19.4043L15.6097 16.7853C14.5719 17.5745 13.3039 18.0014 12.0002 18.0003C9.39916 18.0003 7.19066 16.3418 6.35866 14.0273L3.09766 16.5398C4.75266 19.7783 8.11366 22.0003 12.0002 22.0003Z" fill="#4CAF50" />
            <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Registration;