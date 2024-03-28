import { HiOutlineCollection } from "react-icons/hi";
import { TiDocumentText } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa6";

import Stat from "./Stat";

const Stats = ({ projects }) => {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter(
    (project) => project.status === "OPEN"
  ).length;
  const numOfProposals = projects.reduce(
    (acc, project) => project.proposals.length + acc,
    -1
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center max-w-screen-lg mx-auto mt-10 gap-x-2 gap-y-4">
      <Stat
        icon={<HiOutlineCollection className="w-20 h-20" />}
        title={"کل پروژه ها"}
        value={numOfProjects}
        color="blue"
      />
      <Stat
        icon={<TiDocumentText className="w-20 h-20" />}
        title={"درخواست ها"}
        value={numOfProposals}
        color="red"
      />
      <Stat
        icon={<FaRegHandshake className="w-20 h-20" />}
        title={"واگذار شده"}
        value={numOfAcceptedProjects}
        color="green"
      />
    </div>
  );
};

export default Stats;
