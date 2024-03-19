import { useState } from "react";
import Textfield from "../../common/Textfield";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center pt-[20vh] lg:pt-[30vh] min-h-[100vh]">
      <form className="w-full sm:max-w-sm">
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
          <div className="flex items-center gap-x-2 text-secondary-600">
            <input
              type="radio"
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              className="form-radio text-primary-900 focus:ring-primary-900 cursor-pointer"
            />
            <label htmlFor="FREELANCER" className="text-lg">
              فریلنسر
            </label>
          </div>
          <div className="flex items-center gap-x-2 text-secondary-600">
            <input
              type="radio"
              name="role"
              id="OWNER"
              value="OWNER"
              className="form-radio text-primary-900 focus:ring-primary-900 cursor-pointer"
            />
            <label htmlFor="OWNER" className="text-lg">
              کارفرما
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-full mt-12">
          تایید اطلاعات
        </button>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
