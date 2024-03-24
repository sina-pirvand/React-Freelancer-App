import { useState } from "react";
import RHFSelect from "../../common/RHFSelect";
import TextField from "../../common/Textfield/index";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../common/DatePickerField";
import useCategories from "../../hooks/useCategories";
const CreateProjectForm = () => {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories } = useCategories();
  console.log(categories);
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
      <RHFSelect
        label="دسته بندی پروژه"
        name="category"
        register={register}
        options={categories}
      />
      <div>
        <label className="block font-bold text-secondary-500/80 mt-3 text-xl">
          تگ ها
        </label>
        <p className="text-[0.8rem] text-secondary-400">
          به هر تعداد که میخواهید نام تگ بنویسید. بعد تایید شما اضافه خواهد شد
        </p>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          placeHolder="نام تگ..."
        />
      </div>
      <DatePickerField date={date} setDate={setDate} label="تعیین ددلاین" />
      <div className="pt-4">
        <button type="submit" className="btn btn-primary ms-auto block">
          افزودن پروژه
        </button>
      </div>
    </form>
  );
};

export default CreateProjectForm;
