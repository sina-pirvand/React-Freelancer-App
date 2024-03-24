import Textfield from "../../common/Textfield";
import RadioInput from "../../common/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../common/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CompleteProfileForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const onSubmit = async (validatedData) => {
    try {
      const { user, message } = await mutateAsync(validatedData);
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("حساب کاربری شما در انتظار تایید است", { icon: "💬" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center pt-[20vh] lg:pt-[30vh] min-h-[100vh]">
      <form className="w-full sm:max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <Textfield label="نام کامل" name="name" register={register} />
        <Textfield label="ایمیل" name="email" register={register} />
        <div className="flex justify-center gap-x-16 mt-10">
          <RadioInput
            label="فریلنسر"
            name="role"
            id="FREELANCER"
            value="FREELANCER"
            watch={watch}
            register={register}
          />
          <RadioInput
            label="کارفرما"
            name="role"
            id="OWNER"
            value="OWNER"
            watch={watch}
            register={register}
          />
        </div>
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn-primary w-full mt-12">
            تایید اطلاعات
          </button>
        )}
      </form>
    </div>
  );
};

export default CompleteProfileForm;
