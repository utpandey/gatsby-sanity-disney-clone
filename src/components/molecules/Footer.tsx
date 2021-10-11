import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer
      className="flex flex-row justify-between px-4 py-4 sm:px-3 sm:py-3 md:px-5 md:py-4 lg:px-10 lg:py-4 footer__cont max-h-min overflow-hidden"
    // style={{ backgroundImage: require(`../../assets/Utsav_Pandey.jpg`) }}
    >
      <div className="flex flex-col my-auto align-middle sm:w-5/12">
        <Link to="/" className="text-white text-xl lg:text-2xl font-medium">
          Invest<span className="text-blue-500 font-light">IQ</span>
        </Link>
        <p className="break-words  md:w-auto text-xs sm:text-xs md:text-xs text-white py-2 sm:p-0 m-0">© 2021 InvestIQ. All rights reserved.</p>
      </div>
      <div className="flex flex-col sm:flex-row  sm:w-7/12 sm:justify-between text-center">
        <div className="flex my-auto px-2 py-3 sm:py-0 sm:px-0">
          <img src="/twitter.svg" alt="twitter" className="px-2 sm:px-1 md:px-2 lg:px-4 my-auto py-auto" />
          <img src="/github.svg" alt="github" className="px-2 sm:px-1 md:px-2 lg:px-4 my-auto py-auto" />
          <img src="/facebook.svg" alt="facebook" className="px-2 sm:px-1 md:px-2 lg:px-4 my-auto py-auto" />
          <img src="/dribble.svg" alt="dribble" className="px-2 sm:px-1 md:px-2 lg:px-4 my-auto py-auto" />

        </div>
        <div className="flex flex-col lg:flex-row my-auto align-middle ">
          <p className="text-gray-400 my-auto py-1 sm:py-auto px-2 sm:px-1 md:px-2 text-xs sm:text-xs md:text-sm lg:text-base lg:px-4">Terms Of Service</p>
          <p className="text-gray-400 my-auto py-1 sm:py-auto px-2 sm:px-1 md:px-2 text-xs sm:text-xs md:text-sm lg:text-base lg:px-4">Privacy Policy</p>
        </div>
      </div>
      {/* <div className="flex-col sm:flex-row sm:w-3/4 sm:justify-between">
        <div className="flex my-auto ">
          <img src="/twitter.svg" alt="twitter" className="sm:px-1 md:px-2 lg:px-4 my-auto py-auto" />
          <img src="/github.svg" alt="github" className="sm:px-1 md:px-2 lg:px-4 my-auto py-auto" />
          <img src="/facebook.svg" alt="facebook" className="sm:px-1 md:px-2 lg:px-4 my-auto py-auto" />
          <img src="/dribble.svg" alt="dribble" className="sm:px-1 md:px-2 lg:px-4 my-auto py-auto" />
        </div>
        <div className="flex flex-col lg:flex-row my-auto align-middle">
          <p className="text-gray-400 my-auto py-auto sm:px-1 md:px-2 sm:text-xs md:text-sm lg:text-base lg:px-4">Terms Of Service</p>
          <p className="text-gray-400 my-auto py-auto sm:px-1 md:px-2 sm:text-xs md:text-sm lg:text-base lg:px-4">Privacy Policy</p>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer
