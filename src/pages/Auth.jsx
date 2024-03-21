import AuthContainer from "../features/auth/AuthContainer";

const Auth = () => {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-[20vh] lg:pt-[30vh] min-h-[100vh]">
        <AuthContainer />
      </div>
    </div>
  );
};

export default Auth;
