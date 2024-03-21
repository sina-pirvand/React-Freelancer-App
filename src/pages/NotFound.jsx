import useMoveBack from "../hooks/useMoveBack";

const NotFound = () => {
  const moveback = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="w-full pt-[10vh] lg:pt-[20vh] min-h-[100vh]">
        <h1 className="text-5xl font-bold text-secondary-400 text-center">
          صفحه مورد نظر یافت نشد :(
        </h1>
        <button
          onClick={moveback}
          className="border-b-2 border-primary-500 text-primary-500 block mx-auto pt-20 text-2xl font-bold"
        >
          بازگشت به صفحه قبل
        </button>
      </div>
    </div>
  );
};

export default NotFound;
