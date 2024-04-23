import "../globals.css";
import Image from "next/image";
import Link from "next/link";

const Footer = function () {
  return (
    <div className="bg-white box-border relative pt-16">
      <hr className="bg-blue-900 h-0.5" />
      <div className="flex mx-24 text-xl font-bold mt-16">
        <div className="w-[350px] h-[200px] border-8 border-sky-500 flex justify-center items-center">
          <Image src="/amelik_logo.png" width={270} height={77} alt="logo" />
        </div>
        <div className="flex justify-between">
          <div className="ml-24 w-[680px]">
            <div className="mt-5 flex justify-between w-full">
              <div> Отделение на ул.Подольских курсантов, 16</div>
              <div>+7 (8362) 47-02-47</div>
            </div>
            <div className="mt-5 flex justify-between w-full">
              <div>Отделение на ул.Советская, 103</div>
              <div>+7 (8362) 341-342</div>
            </div>
            <div className="mt-5 flex justify-between w-full">
              <div>Отделение на ул.Советская, 105</div>
              <div>+7 (8362) 65-22-21</div>
            </div>
          </div>
          <div className="flex flex-col ml-24">
            <div className="mt-5 flex">
              <div className="mr-2.5">
                <Image
                  src="/envelope.png"
                  width={24}
                  height={24}
                  alt="envelope"
                />
              </div>
              <div>info@amelik.pro</div>
            </div>
            <div className="mt-5 flex">
              <div>Мы в соцсетях:</div>
              <div className="w-7 h-7 mx-2 flex justify-center items-center border-[3px] border-cyan-500 rounded-md">
                <a href="https://t.me/amelik_pro/">
                  <Image
                    src="/telegram.png"
                    width={17}
                    height={17}
                    alt="telegram"
                  />
                </a>
              </div>
              <div className="w-7 h-7  flex justify-center items-center border-[3px] border-cyan-500 rounded-md">
                <a href="https://vk.com/amelik12">
                  <Image src="/vk.png" width={17} height={17} alt="vk" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-base font-normal mb-5">
        &copy; ООО "ЛАБ12", 2024. Все права защищены.
      </div>
    </div>
  );
};
export default Footer;
