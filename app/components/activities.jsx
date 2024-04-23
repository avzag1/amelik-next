import Image from "next/image";
import activitiesArray from "../activitiesArray";
import Link from "next/link";

const Activities = function () {
  const res = activitiesArray.map(function (item, index) {
    return (
      <Link href={`/activity/${item.activityId}`}
        key={index}
        className="w-60 h-36 flex flex-col items-center border-0 border-stone-300 hover:border rounded-sm"
      >
        <div>
          <Image src={item.image} width={75} height={75} alt="activityImg" />
        </div>
        <div>{item.title}</div>
      </Link>
    );
  });
  return (
    <div className="bg-slate-50 py-8">
      <h1 className="text-5xl text-center">Направления</h1>
      <div className="flex flex-wrap justify-center mx-auto mt-12 max-w-[1250px] bg-white p-5">{res}</div>
    </div>
  );
};
export default Activities;
