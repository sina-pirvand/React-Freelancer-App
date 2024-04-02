import { useState } from "react";
import RHFSelect from "../../common/RHFSelect";
import TextField from "../../common/Textfield/index";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../common/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../common/Loading";
import useEditProject from "./useEditProject";

const CreateProjectForm = ({ onClose, projectToEdit = {} }) => {
  //EDIT PROJECT LOGIC
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    description,
    budget,
    deadline,
    // category,
    tags: prevTags,
  } = projectToEdit;
  let editvalues = {};
  if (isEditSession) {
    editvalues = { title, description, budget };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();
  console.log(categories);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange", defaultValues: editvalues });

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
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
        {isCreating ? (
          <Loading />
        ) : (
          <button
            type="submit"
            className="btn btn-primary ms-auto block px-6 py-3 text-base"
          >
            تایید
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateProjectForm;
