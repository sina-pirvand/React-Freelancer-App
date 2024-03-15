import CheckOTPForm from "../features/auth/CheckOTPForm";
import SendOTPForm from "../features/auth/SendOTPForm";
const Auth = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="w-full sm:max-w-sm">
        <SendOTPForm />
        {/* <CheckOTPForm /> */}
      </div>
    </div>
  );
};

export default Auth;
