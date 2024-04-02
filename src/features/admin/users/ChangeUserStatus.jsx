import { useForm } from "react-hook-form";
import RHFSelect from "../../../common/RHFSelect";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../../common/Loading";
import useChangeUserStaus from "./useChangeUserStatus";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isUpdating } = useChangeUserStaus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data }, // {userId, data:{status:0/1/2}}
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };

  return isUpdating ? (
    <Loading />
  ) : (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <RHFSelect
          name="status"
          label="تغییر وضعیت"
          register={register}
          required
          options={options}
        />
        <button
          type="submit"
          className="btn btn-primary ms-auto block px-6 py-3 text-base"
        >
          تایید
        </button>
      </form>
    </div>
  );
}
export default ChangeUserStatus;
