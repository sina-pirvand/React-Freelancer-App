import { useForm } from "react-hook-form";
import Textfield from "../../common/Textfield";
import Loading from "../../common/Loading";
import useCreateProposal from "./useCreateProposal";

const CreateProposal = ({ onClose, projectId }) => {
  //Note: ProjectId is needed to identify for which project the proposal will be added

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isCreating, createProposal } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
    // console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textfield
          label="توضیحات درخواست"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات درخواست نباید خالی باشد",
            minLength: {
              value: 10,
              message: "طول توضیحات درخواست نباید کمتر از 10 حرف باشد",
            },
          }}
          errors={errors}
        />
        <Textfield
          label="مبلغ"
          name="price"
          register={register}
          required
          type="number"
          validationSchema={{
            required: "مبلغ نباید خالی باشد",
          }}
          errors={errors}
        />
        <Textfield
          label="مدت انجام"
          name="duration"
          register={register}
          required
          type="number"
          validationSchema={{
            required: "مدت نباید خالی باشد",
          }}
          errors={errors}
        />
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
    </div>
  );
};

export default CreateProposal;
