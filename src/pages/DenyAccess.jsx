import { useNavigate } from "react-router-dom";

const DenyAccess = () => {
  const navigate = useNavigate();
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="w-full pt-[10vh] lg:pt-[20vh] min-h-[100vh]">
        <h1 className="text-5xl font-bold text-secondary-400 text-center">
          ارور 403 - دسترسی غیر مجاز
        </h1>
        <p className="text-xl font-bold text-secondary-400/70 text-center mt-4">
          شما اجازه دسترسی به این صفحه را ندارید
        </p>
        <button
          onClick={() => {
            navigate("/auth");
          }}
          className="border-b-2 border-primary-500 text-primary-500 block mx-auto pt-20 text-2xl font-bold"
        >
          بازگشت به خانه
        </button>
      </div>
    </div>
  );
};

export default DenyAccess;
