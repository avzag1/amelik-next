"use client"
import Image from "next/image";
import Link from "next/link";
import AppointmentButton from "./appointmentButton";
import CallHomeButton from "./callHomeButton";

const Bg1 = function () {
  return (
    <div className="h-[220px]">
      <div
        id="main-bg"
        class="z-[-1] flex fixed w-full max-w-[2000px] h-[930px] mt-[-250px] "
      >
        <Image src="/main2.jpg" width={2000} height={100} alt="main2" />
      </div>

      <div class="text-white text-7xl ml-24 w-fit h-60 bg-sky-900 bg-opacity-15 flex flex-col p-12 mt-12">
        <div>С заботой о вас</div>
        <div>и ваших близких!</div>
      </div>
      <AppointmentButton className="ml-36 mt-12 font-medium uppercase text-center flex p-4 md:px-5 xl:text-lg md:text-sm text-xs  w-fit h-fit border rounded border-sky-500 bg-sky-500 text-white hover:bg-white transition-all hover:text-blue-900 hover:border-blue-900"/>
      <CallHomeButton/>
    </div>
  );
};
export default Bg1;
