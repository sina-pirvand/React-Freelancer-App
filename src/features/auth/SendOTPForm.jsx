import { useState } from "react";

const SendOTPForm = () => {
  const [phonenumber, setPhonenumber] = useState("");
  return (
    <div>
      <form className="space-y-8">
        <div>
          <label htmlFor="phonenumber" className="mb-1">
            شماره موبایل
          </label>
          <input
            type="text"
            id="phonenumber"
            className="textfield-input"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOTPForm;
