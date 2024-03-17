import { useState } from "react";
import Textfield from "../../common/Textfield";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await mutateAsync({ phoneNumber }); //{phoneNumber:phoneNumber}
      toast.success(res.message);
    } catch (error) {
      toast.error(`${error?.response?.data?.message}
      لطفا شماره موبایل صحیح وارد نمایید`);
    }
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <Textfield
          name="phoneNumber"
          value={phoneNumber}
          label="شماره موبایل"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
};

export default SendOTPForm;
