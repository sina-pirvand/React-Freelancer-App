import TextField from "../../common/Textfield/index";
import { useForm } from "react-hook-form";
const CreateProjectForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان پروژه نباید خالی باشد",
          minLength: {
            value: 5,
            message: "طول عنوان پروژه نباید کمتر از 5 حرف باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات پروژه نباید خالی باشد",
          minLength: {
            value: 10,
            message: "طول توضیحات پروژه نباید کمتر از 10 حرف باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه(تومان)"
        name="budget"
        register={register}
        required
        validationSchema={{
          required: "مقدار بودجه نباید خالی باشد",
          minLength: {
            value: 5,
            message: "قیمت باید حداقل 5 رقم داشته باشد",
          },
        }}
        errors={errors}
        type="number"
      />
      <div className="pt-4">
        <button type="submit" className="btn btn-primary ms-auto block">
          افزودن پروژه
        </button>
      </div>
    </form>
  );
};

export default CreateProjectForm;
