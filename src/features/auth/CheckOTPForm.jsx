import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import { HiArrowRight } from "react-icons/hi";

const RESEND_TIME = 90;

const CheckOTPForm = ({
  phoneNumber,
  handleBack,
  handleResendOtp,
  otpResponse,
}) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    // cleanup
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp }); //{phoneNumber:phoneNumber,otp:otp}
      toast.success(message);
      if (user.isActive) {
        if (user.role === "OWNER") navigate("/owner");
        if (user.role === "FREELANCER") navigate("/freelancer");
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full sm:max-w-sm space-y-7">
      <form onSubmit={checkOtpHandler}>
        <button onClick={handleBack}>
          <HiArrowRight className="w-7 h-10 text-secondary-400" />
        </button>
        <h1 className="font-bold text-secondary-700 my-3 text-xl">
          کد تایید را وارد کنید
        </h1>
        {otpResponse && (
          <p className="mb-3 text-secondary-400 ">
            {otpResponse?.message}
            <button
              onClick={handleBack}
              className="ms-1 border-b-2 border-primary-500 text-primary-500"
            >
              ویرایش
            </button>
          </p>
        )}
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
        <button
          type="submit"
          className="btn btn-primary block w-full md:w-auto md:mx-auto md:px-10 py-2 mt-10"
        >
          تایید کد
        </button>
        <div className="flex justify-center mt-10">
          {time > 0 ? (
            <p className="text-secondary-500 font-semibold">
              {time} ثانیه تا ارسال مجدد کد
            </p>
          ) : (
            <button
              onClick={handleResendOtp}
              className="btn border-2 text-secondary-500 border-primary-600"
            >
              ارسال مجدد کد
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckOTPForm;
