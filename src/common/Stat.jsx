import { toPersianNumbersWithComma } from "../utils/toPersianNumbers";

const colors = {
  blue: "bg-blue-100/80 text-blue-500",
  red: "bg-red-100/80 text-red-500",
  green: "bg-green-100/80 text-green-500",
};

const Stat = ({ icon, title, value, color }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-10 shadow-sm w-[330px]">
      <div
        className={`w-28 h-28 row-span-2 flex items-center justify-center
     rounded-full p-2 ${colors[color]}`}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 self-center text-[1.4rem] sm:text-2xl text-nowrap">
        {title}
      </h5>
      <p className="text-2xl font-bold text-secondary-900 text-center py-3">
        {toPersianNumbersWithComma(value)}
      </p>
    </div>
  );
};

export default Stat;
