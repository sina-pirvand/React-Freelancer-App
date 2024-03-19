import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const {
    isPending,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await mutateAsync({ phoneNumber }); //{phoneNumber:phoneNumber}
      setStep(2);
      toast.success(res.message);
    } catch (error) {
      toast.error(`${error?.response?.data?.message}
        فرمت شماره نادرست است`);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            setPhoneNumber={(e) => setPhoneNumber(e.target.value)}
            sendOtpHandler={sendOtpHandler}
            isPending={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            // handleBack={() => setStep(1)}
            handleBack={() => setStep((step) => step - 1)}
            handleResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};

export default AuthContainer;
