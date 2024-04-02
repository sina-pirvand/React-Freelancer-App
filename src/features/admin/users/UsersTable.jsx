import Empty from "../../../common/Empty";
import Loading from "../../../common/Loading";
import Table from "../../../common/Table";
import useUsers from "../useUsers";
import UserRow from "./UserRow";

const UsersTable = () => {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Loading />;
  if (!users.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default UsersTable;
