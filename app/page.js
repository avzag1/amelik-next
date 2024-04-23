import Image from "next/image";
import Bg1 from "./components/bg1";
import Departments from "./components/departments";
import { BsEnvelopeAt } from "react-icons/bs";
import Activities from "./components/activities";
import PriceButton from "./components/priceButton";
import Slider1 from "./components/slider1";

export default function Home() {
  return (
    <>
    <Bg1/>
    <Departments/>
    <div className="flex justify-center mx-auto pb-20 uppercase bg-white ">
      <BsEnvelopeAt  className="w-6 h-6 text-sky-500 mr-2"/>
      <div>e-male адрес: info@amelik.pro</div>
    </div>
    <Activities/>
    <PriceButton/>
    <Slider1/>
    </>
  );
}
