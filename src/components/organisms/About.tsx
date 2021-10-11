import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function About() {
  // const { sanityPage }: any = useStaticQuery(
  //   graphql`
  //   query sanityPage {
  //     sanityPage {
  //       id
  //       pageBuilder {
  //         heading
  //       }
  //     }
  //   }
  //   `
  // )

  // console.log(sanityPage)

  return (
    <div className="pb-10">
      <div className=" _xs:pt-5 _xs:px-5 sm:px-8  sm:pt-8 md:pt-10 md:px-14 lg:px-14 2xl:px-24   _xl:pt-14 pt-20 lg:pb-48 _mdM:pb-32 2xl:pb-52 _md:relative box-content ">
        <div className="about__cont--1 _xs:rounded-b-3xl  min-h-full flex flex-col px-5 _md:pt-8  md:px-10 _xl:px-20 _2xl:px-24 py-32  _mdM:relative ">
          <p className="pt-10 sm:pt-5 md:p-0 text-white _xs:text-6xl _sm:text-4xl _md:text-2xl _md:text-center  _lg:text-4xl  _xl:text-4xl  md:text-6xl font-medium">
            Investing made Social
          </p>
          <div className="">
            <div className="">
              <p className="text-white _md:max-w-full _md:break-normal  _lg:break-words _mdM:max-w-md">
                InvestIQ is a social investing platform. The whole aim is to
                share investment activity and view investment activity of close
                friends and other relatable people to get inspired.
              </p>
              <ul className="text-white mx-0">
                <li className="_md:break-normal _md:max-w-full _lg:break-words _mdM:max-w-md">
                  - Never miss an investment opportunity
                </li>
                <li className="_md:break-normal _md:max-w-full _lg:break-words _mdM:max-w-md">
                  - Know where, when and how much your friends are investing
                </li>
                <li className="_md:break-normal _md:max-w-full _lg:break-words _mdM:max-w-md">
                  - Do this all through your favorite social apps{" "}
                  <span className="font-extrabold">SLACK</span>
                </li>
              </ul>
            </div>
            <div className="justify-center _md:text-center pt-3  _xs:flex">
              <input
                className="rounded-tl-full rounded-bl-full p-2 sm:p-3 text-black outline-none _xs:w-3/6 _xs:p-2"
                type="text"
                name="number"
                id="input#1"
                placeholder="+91"
              />
              <button className="text-white bg-blue-500 rounded-tr-full rounded-br-full py-0 px-3 sm:p-3 _xs:w-1/6">
                Invite Me
              </button>
            </div>
          </div>
          <div className=" hidden _mdM:flex _mdM:absolute _xs:p-5 _md:top-2/3 _md:justify-center _md:px-auto  _md:bottom-0  _md:pr-0 _mdM:right-0  _mdM:top-0 lg:right-0 2xl:pr-20  _mdM:pt-10 _mdM:pr-8   _xl:pr-10">
            <div className=" _xs:mx-auto flex flex-col _xs:flex-row _md:flex-row flex-wrap  _xs:flex-nowrap  _xs:whitespace-nowrap _xs:overflow-x-scroll  ">
              <div className="bg-white p-3 _xs:p-0 flex _xs:whitespace-normal  _xs:min-w-max _md:min-w-lg  max-w-xs _md:p-2 _lg:max-w-xs m-2  rounded-xl shadow-card ">
                <img
                  src="/Oval1.png"
                  alt="Oval1"
                  className="w-14 h-14 _xs:w-16 _xs:h-16 _xs:my-auto _xs:p-0"
                />
                {/* <StaticImage src={require("/Oval1.png")} alt="Avatar1" /> */}
                <div className="flex flex-col _xs:my-auto my-0 py-0 w-3/5 pl-5">
                  <h1 className="text-xl  _md:text-lg _xs: _md:w-40 text-gray-600  my-0 py-0 break-words _xs:leading-none _lg:leading-5">
                    Arpit Sanghavi invested in
                    <span className="text-gray-700"> IRCTC</span>
                  </h1>
                  <p className="my-0 py-1 _xs: _md:w-40 leading-snug  _md:break-words">
                    Bought @ 3022.10
                  </p>
                  <p className="my-0 py-0 _xs: _md:w-40 leading-snug  _md:break-words">
                    1.2K+ people Invested
                  </p>
                </div>
              </div>
              <div className="bg-white p-3 _xs:p-0 flex _xs:whitespace-normal  _xs:min-w-max _md:min-w-lg  max-w-xs _md:p-2 _lg:max-w-xs m-2  rounded-xl shadow-card ">
                <img
                  src="/Oval2.png"
                  alt="Oval2"
                  className="w-14 h-14 _xs:w-16 _xs:h-16 _xs:my-auto _xs:p-0"
                />{" "}
                <div className="flex flex-col _xs:my-auto my-0 py-0 w-3/5 pl-5">
                  <h1 className="text-xl  _md:text-lg _md:w-40 text-gray-600  my-0 py-0 break-words _xs:leading-none _lg:leading-5">
                    Sarvi Invested in
                    <span className="text-gray-700">
                      {" "}
                      ICICI Technology Fund - Growth
                    </span>
                  </h1>
                  <p className="my-0 py-1 _md:w-40 leading-snug  _md:break-words">
                    Bought @ 3022.10
                  </p>
                  <p className="my-0 py-0 _md:w-40 leading-snug  _md:break-words">
                    1.8K+ people Invested
                  </p>
                </div>
              </div>
              <div className="bg-white p-3 _xs:p-0 flex _xs:whitespace-normal  _xs:min-w-max _md:min-w-lg  max-w-xs _md:p-2 _lg:max-w-xs m-2  rounded-xl shadow-card ">
                <img
                  src="/Oval3.png"
                  alt="Oval3"
                  className="w-14 h-14 _xs:w-16 _xs:h-16 _xs:my-auto _xs:p-0"
                />{" "}
                <div className="flex flex-col _xs:my-auto my-0 py-0 w-3/5 pl-5">
                  <h1 className="text-xl  _md:text-lg _md:w-40 text-gray-600  my-0 py-0 break-words _xs:leading-none _lg:leading-5">
                    Amrose Birani Sold in
                    <span className="text-gray-700"> BPCL</span>
                  </h1>
                  <p className="my-0 py-1 _md:w-40 leading-snug  _md:break-words">
                    Sold @ 500.10
                  </p>
                  <p className="my-0 py-0 _md:w-40 leading-snug  _md:break-words">
                    3.1K+ people Sold
                  </p>
                </div>
              </div>
              <div className="bg-white p-3 _xs:p-0 flex _xs:whitespace-normal  _xs:min-w-max _md:min-w-lg  max-w-xs _md:p-2 _lg:max-w-xs m-2  rounded-xl shadow-card ">
                <img
                  src="/Oval4.png"
                  alt="Oval4"
                  className="w-14 h-14 _xs:w-16 _xs:h-16 _xs:my-auto _xs:p-0"
                />
                <div className="flex flex-col _xs:my-auto my-0 py-0 w-3/5 pl-5">
                  <h1 className="text-xl  _md:text-lg _md:w-40 text-gray-600  my-0 py-0 break-words _xs:leading-none _lg:leading-5">
                    Arun Yadav Invested in
                    <span className="text-gray-700"> Bitcoin</span>
                  </h1>
                  <p className="my-0 py-1 _md:w-40 leading-snug  _md:break-words">
                    Bought @ 20,10,000
                  </p>
                  <p className="my-0 py-0 _md:w-40 leading-snug  _md:break-words">
                    300+ people Invested
                  </p>
                </div>
              </div>
              <div className="_md:hidden flex bg-white p-3  _xs:flex-col _md:min-w-lg  max-w-xs _md:p-2 _lg:max-w-xs m-2 rounded-xl shadow-card">
                <img
                  src="/Oval5.png"
                  alt="Oval5"
                  className="w-14 h-14 _xs:w-16 _xs:h-16 _xs:my-auto _xs:p-0"
                />
                <div className="flex flex-col _xs:my-auto my-0 py-0 w-3/5 pl-5">
                  <h1 className="text-xl  _md:text-lg _md:w-40 text-gray-600  my-0 py-0 break-words _xs:leading-none _lg:leading-5">
                    Raj Singh Invested in Brookfield
                    <span className="text-gray-700"> REIT</span>
                  </h1>
                  <p className="my-0 py-1 _md:w-40 leading-snug  _md:break-words">
                    Bought @ 3022.10
                  </p>
                  <p className="my-0 py-0 _md:w-40 leading-snug  _md:break-words">
                    1.2K+ people Invested
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-auto flex flex-nowrap px-2 scrolling-touch  sm:px-0 mx-3.5 sm:overflow-auto _mdM:hidden sm:flex-wrap py-10 sm:py-5 md:pt-10 sm:place-content-center ">
          <div className="flex flex-1 p-4 max-w-max sm:max-w-xs md:max-w-xs lg:max-w-xl sm:p-2 m-2  rounded-xl shadow-card ">
            <img
              src="/Oval1.png"
              alt="Oval1"
              className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 _xs:mx-auto _xs:p-0"
            />
            {/* <StaticImage src={require("/Oval1.png")} alt="Avatar1" /> */}
            <div className="flex flex-col  my-0 py-0 pl-3 md:pl-5">
              <h1 className=" text-lg sm:text-xl sm:w-40 md:w-44 lg:w-56 text-gray-600  my-0 py-0 break-words _xs:leading-none _lg:leading-5">
                Arpit Sanghavi invested {"    "} in
                <span className="text-gray-700 block"> IRCTC</span>
              </h1>
              <p className="my-0 py-1 text-xs sm:text-base w-full sm:w-40 md:w-44 lg:w-56 leading-snug  _md:break-words">
                Bought @ 3022.10
              </p>
              <p className="my-0 py-0 text-xs sm:text-base w-full sm:w-40 md:w-44 lg:w-56 leading-snug  _md:break-words">
                1.2K+ people Invested
              </p>
            </div>
          </div>
          <div className="flex flex-1 p-4 max-w-max sm:max-w-xs md:max-w-xs lg:max-w-xl sm:p-2 m-2  rounded-xl shadow-card ">
            <img
              src="/Oval2.png"
              alt="Oval2"
              className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 _xs:mx-auto _xs:p-0"
            />{" "}
            <div className="flex flex-col  my-0 py-0 pl-3 md:pl-5">
              <h1 className="text-lg sm:text-xl sm:w-40 md:w-44 lg:w-56 text-gray-600  my-0 py-0 break-words _xs:leading-none _lg:leading-5">
                Sarvi Invested in
                <span className="text-gray-700 block">
                  {" "}
                  ICICI Technology Fund - Growth
                </span>
              </h1>
              <p className="my-0 py-1 text-xs sm:text-base w-full sm:w-40 md:w-40 lg:w-56 leading-snug  _md:break-words">
                Bought @ 3022.10
              </p>
              <p className="my-0 py-0 text-xs sm:text-base w-full sm:w-40 md:w-40 lg:w-56 leading-snug  _md:break-words">
                1.8K+ people Invested
              </p>
            </div>
          </div>
          <div className="flex flex-1 p-4 max-w-max sm:max-w-xs md:max-w-xs lg:max-w-xl sm:p-2 m-2  rounded-xl shadow-card ">
            <img
              src="/Oval3.png"
              alt="Oval3"
              className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 _xs:mx-auto _xs:p-0"
            />{" "}
            <div className="flex flex-col  my-0 py-0 pl-3 md:pl-5">
              <h1 className="text-lg sm:text-xl sm:w-40 md:w-44 lg:w-56 text-gray-600  my-0 py-0 break-words _xs:leading-none _lg:leading-5">
                Amrose Birani Sold in
                <span className="text-gray-700 block"> BPCL</span>
              </h1>
              <p className="my-0 py-1 text-xs sm:text-base w-full sm:w-40 md:w-44 lg:w-56 leading-snug  _md:break-words">
                Sold @ 500.10
              </p>
              <p className="my-0 py-0 text-xs sm:text-base w-full sm:w-40 md:w-44 lg:w-56 leading-snug  _md:break-words">
                3.1K+ people Sold
              </p>
            </div>
          </div>
          <div className="flex flex-1 p-4 max-w-max sm:max-w-xs md:max-w-xs lg:max-w-xl sm:p-2 m-2  rounded-xl shadow-card ">
            <img
              src="/Oval4.png"
              alt="Oval4"
              className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 _xs:mx-auto _xs:p-0"
            />
            <div className="flex flex-col  my-0 py-0 pl-3 md:pl-5">
              <h1 className="text-lg sm:text-xl sm:w-40 md:w-44 lg:w-56 text-gray-600  my-0 py-0 break-words _xs:leading-none _lg:leading-5">
                Arun Yadav Invested in
                <span className="text-gray-700 block"> Bitcoin</span>
              </h1>
              <p className="my-0 py-1 text-xs sm:text-base w-full sm:w-40 md:w-44 lg:w-56 leading-snug  _md:break-words">
                Bought @ 20,10,000
              </p>
              <p className="my-0 py-0 text-xs sm:text-base w-full sm:w-40 md:w-44 lg:w-56 leading-snug  _md:break-words">
                300+ people Invested
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 sm:pt-20 xl:pt-0">
        <div className="text-center p-6 text-indigo-900">
          <h1 className="text-2xl md:text-4xl">Key Product Highlights</h1>
        </div>
        <div className="px-8">
          <div className="flex flex-col md:flex-row max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto md:px-10 py-2 md:py-3 lg:py-0">
            <div className="w-auto md:w-1/2 pr-5 ">
              <h3 className="text-indigo-900">Social Investing</h3>
              <p className="break-words max-w-xl">
                You share your investment ideologies and activity and in return
                you get to see what the InvestIQ community at large is upto, in
                addition to the activity of your close friends.
              </p>
            </div>
            <div className="w-auto md:w-1/2 lg:w-1/2">
              <img src="/feat-1.png" alt="feature" />
            </div>
          </div>
          <div className=" flex flex-col md:flex-row max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto md:px-10 py-2 md:py-1 lg:py-0 ">
            <div className="flex flex-col md:hidden w-auto md:w-1/2 my-auto ">
              <h3 className="text-indigo-900">SLACK APP</h3>
              <p className="break-words max-w-xl">
                Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Donec sed odio dui.
              </p>
              {/* <a className="text-white text-xl font-medium  px-4 py-2 cursor-pointer rounded-md  bg-blue-500 items-center">
                Sign me up!
              </a> */}
            </div>

            <div className="my-auto w-auto md:w-1/2 lg:w-1/2">
              <img src="/feat-2.png" alt="feature" />
            </div>

            <div className="hidden md:flex md:flex-col w-auto md:w-1/2 my-auto pl-5 ">
              <h3 className="text-indigo-900">SLACK APP</h3>
              <p className="break-words max-w-xl">
                Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Donec sed odio dui.
              </p>
              {/* <a className="text-white lg:w-2/5 text-xl font-medium  px-4 py-2 cursor-pointer rounded-md  bg-blue-500 items-center">
                Sign me up!
              </a> */}
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto md:px-10 py-2 md:py-3 lg:py-0">
            <div className="w-auto md:w-1/2 my-auto pr-5 ">
              <h3 className="text-indigo-900">Super Easy & Super Fun</h3>
              <p className="break-words max-w-xl">
                Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh.
              </p>
              <div className=" hidden md:flex ">
                <img src="/feat-3--1.png" alt="" className="w-1/2" />
                <img src="/feat-3--2.png" alt="" className="w-1/2 pl-2" />
              </div>
            </div>
            <div className="w-auto md:w-1/2 lg:w-1/2">
              <img src="/feat-3.png" alt="feature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

//  <div className="flex flex-col absolute _xs:flex-row _xs:overflow-x-scroll _xs:overflow-y-hidden _xs:flex-nowrap  _md:flex-row _md:flex-wrap _md:top-2/3 _md:justify-center _md:px-auto  _md:bottom-0 _md:left-0 _md:pr-0 _mdM:right-0  _mdM:top-0  2xl:pr-20  _mdM:pt-10 _mdM:pr-8   _xl:pr-10">
//             <div className="bg-white p-3 _xs:p-2 flex _xs:flex-col _xs:min-w-xs _md:min-w-lg  max-w-md _md:p-2 _lg:max-w-xs m-2  rounded-xl shadow-card ">
