import { useState } from "react";
const Notif = () => {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div className="absolute text-center bg-rose-500 text-white p-2 bg-opacity-70 w-full flex items-center gap-4 rounded-sm">
        <span
          className="text-2xl cursor-pointer transition-all duration-500 hover:rotate-180"
          onClick={() => {
            setShow(!show);
          }}
        >
          &times;
        </span>
        <p>
          فرصت بررسی کامل پروژه رو نداری؟ فیلم دمو رو ببین :)
          <span className="ms-3">
            <a
              href="https://www.aparat.com/v/5OYsZ"
              target="_blank"
              className="underline font-bold"
            >
              مشاهده
            </a>
          </span>
        </p>
      </div>
    )
  );
};

export default Notif;
