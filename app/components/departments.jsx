import Image from "next/image";

const Departments = function () {
  return (
    <div className="mt-96 p-16 flex justify-center bg-white">
      <div className="w-96 h-80 bg-[#f2f2f2] text-[#0d385f]">
        <div className="text-3xl my-5 mx-auto text-center">
          Отделение №1
        </div>
        <div className="text-3xl mt-8 mx-auto text-center font-semibold">(8362) 47-02-47</div>
        <div className="text-center p-8">
          Республика Марий Эл, г. Йошкар-Ола, ул. Подольских курсантов, дом 16,
          литер А, помещение 3
        </div>
      </div>
      <div className="w-96 h-80 text-white bg-[#049dd9]">
       
          <div className="text-3xl my-5 mx-auto text-center">Отделение №2</div>
       
        <div className="text-3xl mt-8 mx-auto text-center font-semibold">(8362) 341-342</div>
        <div className="text-center p-8">
          Республика Марий Эл, г. Йошкар-Ола, ул.Советская, 103, здание аптеки
          №1, этаж 2
        </div>
      </div>
      <div className="w-96 h-80 text-white bg-[#0477bf]">
      
          <div className="text-3xl my-5 mx-auto text-center">Отделение №3</div>
        
        <div className="text-3xl mt-8 mx-auto text-center font-semibold">(8362) 65-22-21</div>
        <div className="text-center p-8">Республика Марий Эл, г. Йошкар-Ола, ул. Советская, 105</div>
      </div>
    </div>
  );
};
export default Departments;
