import Link from "next/link";
import { HiDownload } from "react-icons/hi";

const PriceButton = function () {
  return (
    <a href="/price.xls" className="flex justify-center bg-white py-12">
      <div className="w-72 h-16 bg-gradient-to-b from-[#3eb8d7] to-[#0382f3] hover:bg-none hover:text-[#3eb8d7] border border-[#3eb8d7] rounded flex justify-center items-center text-white text-xl transition-all duration-500">
        <div>Прейскурант цен</div>
        <HiDownload className="w-7 h-7 ml-2" />
      </div>
    </a>
  );
};
export default PriceButton;
