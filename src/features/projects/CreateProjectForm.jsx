import TextField from "../../common/Textfield/index";
import { useForm } from "react-hook-form";
const CreateProjectForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button type="submit" className="btn btn-primary">
        افزودن پروژه
      </button>
    </form>
  );
};

export default CreateProjectForm;
