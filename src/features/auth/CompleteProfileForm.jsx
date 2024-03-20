import { useState } from "react";
import Textfield from "../../common/Textfield";
import RadioInput from "../../common/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../common/Loading";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      console.log(user, message);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-[20vh] lg:pt-[30vh] min-h-[100vh]">
      <form className="w-full sm:max-w-sm" onSubmit={handleSubmit}>
        <Textfield
          label="نام کامل"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textfield
          label="ایمیل"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-center gap-x-16 mt-10">
          <RadioInput
            label="فریلنسر"
            name="role"
            id="FREELANCER"
            value="FREELANCER"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "FREELANCER"}
          />
          <RadioInput
            label="کارفرما"
            name="role"
            id="OWNER"
            value="OWNER"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "OWNER"}
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
