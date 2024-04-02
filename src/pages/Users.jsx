import UsersTable from "../features/admin/users/UsersTable";

const Users = () => {
  return (
    <div>
      <h1 className="ps-4 font-bold text-3xl text-secondary-900 mb-6">
        لیست کاربران
      </h1>
      <UsersTable />
    </div>
  );
};

export default Users;
