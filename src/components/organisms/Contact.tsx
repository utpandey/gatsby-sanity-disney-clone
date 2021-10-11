import React from "react"

function Contact() {
  return (
    <div className="px-8 pb-8  md:pb-10 md:px-32 ">
      <div className="contact__cont flex flex-col lg:flex-row rounded-3xl py-10 px-4 md:py-16 md:px-5 lg:py-8 lg:px-6">
        <div className="w-2/3 mx-auto md:w-auto lg:w-1/3  ">
          <img src="/check.svg" alt="check" className="mx-auto" />
        </div>
        <div className="flex flex-col lg:w-2/3 text-center">
          <h1 className="text-white md:text-3xl">
            Like what you read about InvestIQ so far?
          </h1>
          <p className="text-white">
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Sed posuere consectetur est at lobortis. Nullam id dolor id nibh
            ultricies vehicula ut id elit. Donec sed odio dui.
          </p>
          <div className="m-auto lg:m-0">
            <input
              className="rounded-tl-full rounded-bl-full p-3 text-black outline-none _xs:w-3/5 _xs:p-2"
              type="text"
              name="number"
              id="number"
              placeholder="+91"
            />
            <button className="text-white bg-blue-500 rounded-tr-full rounded-br-full p-3 _xs:w-2/5 _xs:px-3 _xs:py-2">
              Invite Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
