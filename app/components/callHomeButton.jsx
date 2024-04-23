import { useState } from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

const CallHomeButton = function () {
  const [isActive, setActive] = useState(false);
  const telNote = () => {
    setActive(!isActive);
  };

  return (
    <>
      <button onClick={telNote} className="ml-36 mt-12 w-fit h-fit p-4 px-5 border rounded bg-sky-500 flex justify-center items-center text-white text-lg font-medium uppercase hover:bg-white transition-all hover:text-blue-900 hover:border-blue-900">
        Вызов врача на дом
      </button>
      <div
        className={
          isActive
            ? "fixed md:inset-y-1/4 md:inset-x-[calc(50%-250px)] bg-white flex justify-center items-center font-black h-auto w-full md:w-[500px] z-40 border border-current rounded-lg p-2 pt-5"
            : "hidden"
        }
      >
        <div className="font-normal text-lg mb-12">
          <div className="text-2xl mb-5">Вызов врача на дом</div>
          <div>Телефон для записи</div>
          <div>(8362) 47-02-47</div>
        </div>
        <button
          onClick={telNote}
          className="absolute top-0 right-0 z-50 h-8 px-2 uppercase ml-10 font-semibold"
        >
          <RxCross1 className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};
export default CallHomeButton;
