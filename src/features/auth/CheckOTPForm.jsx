import { useState } from "react";
import OTPInput from "react-otp-input";
const CheckOTPForm = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-full sm:max-w-sm space-y-7">
      <form>
        <h1 className="font-bold text-secondary-400 my-3 text-xl">
          کد تایید را وارد کنید
        </h1>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          //   renderSeparator={<span>-</span>}
          renderInput={(props) => {
            return <input type="number" {...props} />;
          }}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center p-2"
          inputStyle="border-2 border-gray-300 rounded-xl py-2 h-15 !w-12 md:h-16 md:!w-14 text-2xl focus:border-primary-400 focus:border-3 focus:bg-primary-100 focus:bg-opacity-30"
          shouldAutoFocus="true"
        />
      </form>
      <button className="btn btn-primary block w-full md:w-auto md:mx-auto md:px-10 py-2">
        تایید کد
      </button>
    </div>
  );
};

export default CheckOTPForm;
