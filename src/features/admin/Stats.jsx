import Stat from "../../common/Stat";
import { HiOutlineCollection } from "react-icons/hi";
import { TiDocumentText } from "react-icons/ti";
import { TbUsers } from "react-icons/tb";

const Stats = ({ proposals, projects, users }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center max-w-screen-lg mx-auto mt-10 gap-x-2 gap-y-4">
      <Stat
        icon={<TbUsers className="w-20 h-20" />}
        title={"تعداد کاربران"}
        value={users.length}
        color="blue"
      />
      <Stat
        icon={<HiOutlineCollection className="w-20 h-20" />}
        title={"پروژه ها"}
        value={projects.length}
        color="green"
      />
      <Stat
        icon={<TiDocumentText className="w-20 h-20" />}
        title={"درخواست ها"}
        value={proposals.length}
        color="red"
      />
    </div>
  );
};

export default Stats;
