import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header
      className="flex flex-row justify-between px-10 py-5 navbar__cont max-h-min static"
    // style={{ backgroundImage: require(`../../assets/Utsav_Pandey.jpg`) }}
    >
      <div className="items-center">
        <Link to="/" className="text-white text-4xl font-medium text-center">
          Invest<span className="text-blue-500 font-light">IQ</span>
        </Link>
      </div>
      <svg
        onClick={() => setToggle(!toggle)}
        xmlns="<http://www.w3.org/2000/svg>"
        id="menu-button"
        className="my-auto h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fff"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      {toggle && <div className="absolute text-center justify-center mx-auto max-w-max top-10 left-0 right-0 z-10">
        <div className="flex flex-col relative rounded-md bg-white  m-auto max-w-max p-10 sm:p-14">
        <a className="text-black text-2xl font-medium my-1 ">About</a>
        <a className="text-black text-2xl font-medium my-1">How it works</a>
        <a className="text-black text-2xl font-medium my-1">Contact</a>
        <a className="text-white text-2xl font-medium my-1 px-4 py-2 cursor-pointer rounded-md  bg-blue-400 items-center">
          Sign Up
        </a>
        <h1 className="absolute right-0 top-0 pr-2" onClick={() => setToggle(false)}>X</h1>
        </div>
      </div>}
      <div className="hidden md:flex items-center">
        <a className="text-white text-xl font-medium md:mx-2 lg:mx-5">About</a>
        <a className="text-white text-xl font-medium md:mx-2 lg:mx-5">How it works</a>
        <a className="text-white text-xl font-medium md:mx-2 lg:mx-5">Contact</a>
        <a className="text-white text-xl font-medium md:ml-2 lg:ml-5 px-4 py-2 cursor-pointer rounded-md  bg-blue-400 items-center">
          Sign Up
        </a>
      </div>
    </header>
  )
}

export default Navbar
