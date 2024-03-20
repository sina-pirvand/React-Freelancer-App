import Textfield from "../../common/Textfield";
import Loading from "../../common/Loading";

const SendOTPForm = ({
  sendOtpHandler,
  isPending,
  phoneNumber,
  setPhoneNumber,
}) => {
  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <Textfield
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          label="شماره موبایل"
          onChange={setPhoneNumber}
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn-primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SendOTPForm;
