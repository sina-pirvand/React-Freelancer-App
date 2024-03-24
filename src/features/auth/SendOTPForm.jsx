import Textfield from "../../common/Textfield";
import Loading from "../../common/Loading";

const SendOTPForm = ({ sendOtpHandler, isPending, register }) => {
  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <Textfield
          label="شماره موبایل"
          name="phoneNumber"
          type="number"
          register={register}
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
