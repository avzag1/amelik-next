"use client";
import Link from "next/link";
import "../globals.css";
import Image from "next/image";
//import { useState } from "react";
// import { useRef } from 'react'
import Navbar from "./navbar";
import Navbar1 from "./navbar1";
import AppointmentButton from "./appointmentButton";
import { BsEyeglasses } from "react-icons/bs";

const Header = function () {
  // const [isActive, setActive] = useState(false);
  // const hide = () => {
  //   setActive(!isActive);
  // };
  return (
    <div className="relative w-full box-border bg-white">
      <div className="md:flex hidden xl:mx-24 mx-4 items-center justify-between h-25 pt-5">
        <div className="h-25 flex items-center">
          <div className="xl:w-[100px] w-70 xl:h-[65px] h-35 px-2 border-2 border-sky-500 flex justify-center items-center">
            <Image src="/amelik_logo.png" width={270} height={77} alt="logo" />
          </div>
          <div className="flex-col ml-4 bg-gradient-to-r from-blue-500 to-red-700 text-transparent bg-clip-text">
            <div className="font-medium xl:text-2xl text-lg uppercase">
              Амелик
            </div>
            <div className="uppercase xl:text-lg text-base">
              Медицинский центр
            </div>
          </div>
        </div>
        <AppointmentButton className="font-bold uppercase text-center flex justify-items-center py-5 px-7 transition-all hover:text-red-500 xl:text-base md:text-sm text-xs md:px-14 w-fit h-fit border-[3px] rounded-full border-red-400 hover:border-blue-900"/>
        <div className="w-12 flex items-center text-sky-500 hover:text-blue-900">
          <BsEyeglasses className="w-full h-auto" />
        </div>
        <div>
          <form class="max-w-md mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Поиск
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Введите слово"
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-sky-500 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Поиск
              </button>
            </div>
          </form>
        </div>

        {/* <div className="flex justify-between md:flex-col lg:flex-row">
          <div className="flex-col font-medium mr-5 xl:text-xl text-base">
            <div className="flex">
              <Image className="object-cover mr-3" src={phone} alt="phone" />
              <div>+7 (965) 418-44-14</div>
            </div>
            <div className="flex">
              <Image className="object-cover mr-3" src={mail} alt="mail" />
              <div>melkaya.nota@mail.ru</div>
            </div>
          </div>
          <div className="md:mt-2 flex md:justify-center">
          <Socials/>
          </div>
        </div> */}
      </div>

      <div className="w-full flex justify-center">
        <Navbar1 />
      </div>

      <hr className="bg-blue-900 h-0.5" />
    
      {/* <div
        className={
          isActive
            ? "hidden"
            : "fixed bottom-5 right-5 bg-white flex justify-center items-center font-black h-36 w-60 z-40 border border-current rounded-lg p-5"
        }
      >
        <div className="font-semibold">
          Посещая этот сайт я принимаю условия Пользовательского соглашения
        </div>
        <button
          onClick={hide}
          className="absolute top-0 right-0 z-50 h-8 px-2 uppercase ml-10 font-semibold"
        >
          <Image src="/cross.svg" width={20} height={20} alt="cross" />
        </button>
      </div>    */}
    </div>
  );
};
export default Header;
