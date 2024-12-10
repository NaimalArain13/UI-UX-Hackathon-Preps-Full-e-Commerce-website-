"use client";
import Image from "next/image"
export default function Login() {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center  py-6">
      {/* Left Side - Image Section */}
      <div className="flex-1 bg-[#CBE4E8] flex justify-start items-center p-6">
        <Image 
          src="/images/signup.png"
          alt="Shopping cart and phone"
          width={600}
          height={300}
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Side - Form Section */}
      <div className="flex-1 max-w-md w-full  p-8 lg:p-12">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Log in to Exclusive</h1>
        <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

        {/* Form */}
        <form className="flex flex-col gap-4">
          
          {/* Email/Phone Input */}
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          {/* Create Account Button */}
          <div className="flex justify-between items-center">
          <button
            type="submit"
            className=" bg-Secondary2 text-white py-2 px-6 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
          >
            Login
          </button>
          <p className="text-Secondary2">Forget Password?</p>
          </div>
        </form>

      </div>
    </div>
  );
}
