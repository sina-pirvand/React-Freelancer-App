import { useState } from "react";
import Modal from "../../../common/Modal";
import Table from "../../../common/Table";
import truncateText from "../../../utils/truncateText";
import { RiUserSettingsLine } from "react-icons/ri";
import ChangeUserStatus from "./ChangeUserStatus";
import { GoDash } from "react-icons/go";

const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

const transformedRole = {
  OWNER: "کارفرما",
  FREELANCER: "فریلنسر",
  ADMIN: "ادمین",
};

const UserRow = ({ user, index }) => {
  const { status, role } = user;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(user.name, 30)}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{transformedRole[role]}</td>
      <td>
        <span
          className={`badge ${statusStyle[status].className} transition-all duration-1000`}
        >
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت کاربر"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeUserStatus
            userId={user._id}
            onClose={() => {
              setOpen(false);
            }}
          />
        </Modal>
        {role === "ADMIN" ? (
          <GoDash className="w-6 h-6 text-secondary-400 ms-2" />
        ) : (
          <button onClick={() => setOpen(true)}>
            <RiUserSettingsLine className="w-6 h-6 text-primary-600 ms-2" />
          </button>
        )}
      </td>
    </Table.Row>
  );
};

export default UserRow;
