import useUser from "../../features/auth/useUser";

const Header = () => {
  const { data } = useUser();
  console.log(data);
  return (
    <div className="col-span-2 px-8 py-4 border-b border-secondary-200">
      Header
    </div>
  );
};

export default Header;
