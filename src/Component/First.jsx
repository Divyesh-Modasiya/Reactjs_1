import React from "react";
import { useState } from "react";
import img1 from "./Assest/img1.jpeg";
import img4 from "./Assest/img4.jpeg";


const First = () => {
  const [count, setCount] = useState(0);
  const incriment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const clearData = () => {
    setCount(0);
  };



  const [count1, setCount1] = useState(0);
  const incriment1 = () => {
    setCount1(count1 + 1);
  };
  const decrement1 = () => {
    if (count1 === 0) {
      setCount1(0);
    } else {
      setCount1(count1 - 1);
    }
  };
  const clearData1 = () => {
    setCount1(0);
  };


  const [count2, setCount2] = useState(0);
  const incriment2 = () => {
    setCount2(count2 + 1);
  };
  const decrement2 = () => {
    if (count2 === 0) {
      setCount2(0);
    } else {
      setCount2(count2 - 1);
    }
  };
  const clearData2 = () => {
    setCount2(0);
  };

  
  const [count3, setCount3] = useState(0);
  const incriment3 = () => {
    setCount3(count3 + 1);
  };
  const decrement3 = () => {
    if (count3 === 0) {
      setCount3(0);
    } else {
      setCount3(count3 - 1);
    }
  };
  const clearData3 = () => {
    setCount3(0);
  };

  return (
    <>
      <div classNameName="Navbar">
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://1000logos.net/wp-content/uploads/2018/09/Blackview-Logo-768x432.png"
                className="w-[20%]"
                alt="Flowbite Logo"
              />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="s1">
        <div className="mainbox w-full h-auto flex justify-evenly">
          <div className="firstbox w-[23%] border-[1px] border-[#0000003d] p-[15px] rounded-[10px] shadow-2xl flex flex-col items-center">
            <div className="imgBox w-[80%] flex flex-col items-center">
              <img src={img4} alt="" className="w-[80%]" />
              <div className="btnbox flex justify-evenly mt-[20px]">
                <button onClick={incriment} className="w-[90px] h-[40px] bg-black text-[white] rounded-[10px]">
                  <span className="text-[15px]">Add +</span>
                </button>
                <h1 className="text-[20px] mx-[15px]">{count}</h1>
                <button onClick={decrement} className="w-[90px] h-[40px] bg-black text-[white] rounded-[10px]">
                  {" "}
                  
                 <span className="text-[15px]">Remove</span>
                </button>
              </div>
              <button onClick={clearData} className="w-full h-[40px] rounded-[10px] bg-black text-white mt-[10px]">
                <span>Clear</span>
              </button>
            </div>
          </div>
          <div className="secondbox w-[23%] border-[1px] border-[#0000003d] p-[15px] rounded-[10px] shadow-2xl flex flex-col items-center">
            <div className="imgBox w-[80%] flex flex-col items-center">
              <img src={img1} alt="" className="w-[80%]" />
              <div className="btnbox flex justify-evenly mt-[20px]">
                <button onClick={incriment1} className="w-[90px] h-[40px] bg-black text-[white] rounded-[10px]">
                  <span className="text-[15px]">Add +</span>
                </button>
                <h1 className="text-[20px] mx-[15px]">{count1}</h1>
                <button onClick={decrement1} className="w-[90px] h-[40px] bg-black text-[white] rounded-[10px]">
                  {" "}
                  
                 <span className="text-[15px]">Remove</span>
                </button>
              </div>
              <button onClick={clearData1} className="w-full h-[40px] rounded-[10px] bg-black text-white mt-[10px]">
                <span>Clear</span>
              </button>
            </div>
          </div>

          <div className="thirdbox w-[23%]  border-[1px] border-[#0000003d] p-[15px] rounded-[10px] shadow-2xl flex flex-col items-center">
            <div className="imgBox w-[80%] flex flex-col items-center">
              <img src={img4} alt="" className="w-[80%]" />
              <div className="btnbox flex justify-evenly mt-[20px]">
                <button onClick={incriment2} className="w-[90px] h-[40px] bg-black text-[white] rounded-[10px]">
                  <span className="text-[15px]">Add +</span>
                </button>
                <h1 className="text-[20px] mx-[15px]">{count2}</h1>
                <button onClick={decrement2} className="w-[90px] h-[40px] bg-black text-[white] rounded-[10px]">
                  {" "}
                  
                 <span className="text-[15px]">Remove</span>
                </button>
              </div>
              <button onClick={clearData2} className="w-full h-[40px] rounded-[10px] bg-black text-white mt-[10px]">
                <span>Clear</span>
              </button>
            </div>
          </div>
         
          <div className="forthtbox w-[23%]  border-[1px] border-[#0000003d] p-[15px] rounded-[10px] shadow-2xl flex flex-col items-center">
            <div className="imgBox w-[80%] flex flex-col items-center">
              <img src={img1} alt="" className="w-[80%]" />
              <div className="btnbox flex justify-evenly mt-[20px]">
                <button onClick={incriment3} className="w-[90px] h-[40px] bg-black text-[white] rounded-[10px]">
                  <span className="text-[15px]">Add +</span>
                </button>
                <h1 className="text-[20px] mx-[15px]">{count3}</h1>
                <button onClick={decrement3} className="w-[90px] h-[40px] bg-black text-[white] rounded-[10px]">
                  {" "}
                  
                 <span className="text-[15px]">Remove</span>
                </button>
              </div>
              <button onClick={clearData3} className="w-full h-[40px] rounded-[10px] bg-black text-white mt-[10px]">
                <span>Clear</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default First;
