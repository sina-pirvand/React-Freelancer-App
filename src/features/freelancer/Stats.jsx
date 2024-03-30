import { HiOutlineCollection } from "react-icons/hi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaRegHandshake } from "react-icons/fa6";
import Stat from "../../common/Stat";

const Stats = ({ proposals }) => {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter(
    (proposal) => proposal.status === 2
  );
  const balance = acceptedProposals.reduce(
    (acc, proposal) => acc + proposal.price,
    0
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center max-w-screen-lg mx-auto mt-10 gap-x-2 gap-y-4">
      <Stat
        icon={<HiOutlineCollection className="w-20 h-20" />}
        title={"کل درخواست ها"}
        value={numOfProposals}
        color="red"
      />
      <Stat
        icon={<FaRegHandshake className="w-20 h-20" />}
        title={"پذیرفته شده"}
        value={acceptedProposals.length}
        color="blue"
      />
      <Stat
        icon={<HiOutlineCurrencyDollar className="w-20 h-20" />}
        title={"مجموع درآمد"}
        value={balance}
        color="green"
      />
    </div>
  );
};

export default Stats;
