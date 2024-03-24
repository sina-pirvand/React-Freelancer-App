import Textfield from "../../common/Textfield";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../common/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../common/RadioInputGroup";

const CompleteProfileForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

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
        <Textfield
          label="نام کامل"
          name="name"
          register={register}
          validationSchema={{
            required: "نام و نام خانوادگی ضروری است",
            pattern: {
              value:
                /^[\p{L}\u{0600}-\u{06FF}]+(\s[\p{L}\u{0600}-\u{06FF}]+)+$/u,
              message: "نام کامل شامل نام و نام خانوادگی می باشد",
            },
          }}
          errors={errors}
        />

        <Textfield
          label="ایمیل"
          name="email"
          register={register}
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است",
            },
          }}
          errors={errors}
        />
        <RadioInputGroup
          register={register}
          watch={watch}
          errors={errors}
          configs={{
            name: "role",
            validationSchema: { required: "انتخاب نقش ضروری است" },
            options: [
              {
                value: "FREELANCER",
                label: "فریلنسر",
              },
              {
                value: "OWNER",
                label: "کارفرما",
              },
            ],
          }}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn-primary w-full mt-6">
            تایید اطلاعات
          </button>
        )}
      </form>
    </div>
  );
};

export default CompleteProfileForm;
