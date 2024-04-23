"use client";

import "../globals.css";
import Image from "next/image";
//import { ThemeModeScript } from "flowbite-react";
//import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const AppointmentButton = function (props) {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isActive, setActive] = useState(false);
  const modalForm = () => {
    setActive(!isActive);
    setInputs({
      name: "",
      phone: "",
      message: "",
    });
  };
  const [isActiveSubmit, setActiveSubmit] = useState(false);
  const modalFormSubmit = () => {
    setActiveSubmit(!isActiveSubmit);
  };
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    modalForm();
    modalFormSubmit();

    if (inputs.name && inputs.phone) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: "error",
            message: "Ошибка!",
          });
          return;
        }

        setForm({
          state: "success",
          message: "Ваша заявка принята.",
        });
        setInputs({
          name: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        setForm({
          state: "error",
          message: "Что-то пошло не так.",
        });
      }
    }
  };
  return (
    <div>
      <button
        onClick={modalForm}
      className={props.className}
      >
        записаться на прием
      </button>

      <div
        className={
          isActive
            ? "fixed md:inset-y-1/4 md:inset-x-[calc(50%-275px)] top-0  left-0 md:w-[440px] w-full md:h-[550px] h-screen bg-sky-500 text-white border-2 border-sky-500 rounded flex flex-col justify-around items-center p-10 z-40"
            : "hidden"
        }
      >
        <button onClick={modalForm} className="absolute top-7 right-7 z-50">
          <RxCross1 className="w-6 h-6" />
        </button>

        <div className="text-2xl mb-3 text-center font-bold">
          Отправьте нам заявку
        </div>
        <div className="text-base mb-3 text-center">Мы вам перезвоним</div>
        <form
          className="flex flex-col justify-between items-center"
          onSubmit={(e) => onSubmitForm(e)}
        >
          <input
            id="name"
            type="text"
            value={inputs.name}
            onChange={handleChange}
            className="p-2 w-[300px] my-2 border border-sky-300 text-stone-900"
            placeholder="Введите ваше имя"
            required
          />
          <input
            id="phone"
            type="tel"
            value={inputs.phone}
            onChange={handleChange}
            className="p-2 w-[300px] my-2 border border-sky-300 text-stone-900"
            placeholder="Телефон"
            required
          />
          <textarea
            id="message"
            type="text"
            value={inputs.message}
            onChange={handleChange}
            className="p-2 w-[300px] my-2 border border-sky-300 text-stone-900"
            placeholder="Комментарий"
            rows="5"
          />
          <input
            type="submit"
            className="w-[220px] rounded-full uppercase font-semibold text-lg hover:text-blue-900 text-white py-3 my-6 border border-gray-500 hover:bg-gray-200 bg-red-700"
          />
          {/* {form.state === "loading" ? (
          <div>Отправка....</div>
        ) : form.state === "error" ? (
          <div>{form.message}</div>
        ) : (
          form.state === "success" && (
            <div className="text-orange-300">Ваш запрос отправлен</div>
          )
        )} */}
        </form>
      </div>
      <div
        className={
          isActiveSubmit
            ? "fixed md:inset-y-1/4 md:inset-x-[calc(50%-275px)] top-0 left-0 md:w-[440px] w-full md:h-[550px] h-screen bg-sky-500 border-blue-900 rounded flex flex-col justify-around items-center px-10 py-[150px] text-white z-30"
            : "hidden"
        }
      >
        <button
          onClick={modalFormSubmit}
          className="absolute top-5 right-5 z-50"
        >
          <RxCross1 className="w-6 h-6" />
        </button>
        <div className="text-center text-2xl">
          {form.state === "loading" ? (
            <div className="text-base">Отправка....</div>
          ) : form.state === "error" ? (
            <div>{form.message}</div>
          ) : (
            form.state === "success" && (
              <>
                <div>Спасибо,</div>
                <div>данные успешно отправлены!</div>
                <div className="text-white text-base mt-8 mb-3">
                  Ваш промокод
                </div>
                <div className="text-2xl font-bold">
                  {concertdetails.promocode}
                </div>
                <div className="text-center text-white text-base mt-4">
                  Введите его в поле «Промокод» при покупке билета.
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default AppointmentButton;
