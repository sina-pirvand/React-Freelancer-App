import { useState } from "react";
import Modal from "../../../common/Modal";
import Table from "../../../common/Table";
import truncateText from "../../../utils/truncateText";
import { RiUserSettingsLine } from "react-icons/ri";

const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

const UserRow = ({ user, index }) => {
  const { status } = user;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="text-wrap min-w-[150px]">{truncateText(user.name, 30)}</td>
      <td>{user.email}</td>
      <td className="text-wrap min-w-[150px]">{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت کاربر"
          open={open}
          onClose={() => setOpen(false)}
        ></Modal>
        <button onClick={() => setOpen(true)}>
          <RiUserSettingsLine className="w-6 h-6 text-primary-600 ms-2" />
        </button>
      </td>
    </Table.Row>
  );
};

export default UserRow;
