import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

const ProjectHeader = ({ project }) => {
  const moveBack = useMoveBack();
  return (
    <div className="flex flex-col md:flex-row items-start  md:items-center justify-between mb-5 md:mb-10">
      <button onClick={moveBack}>
        <HiArrowRight className="w-7 h-10 text-secondary-400" />
      </button>
      <h1 className="font-bold text-xl">لیست درخواست های «{project.title}»</h1>
      <h1>&nbsp;</h1>
    </div>
  );
};

export default ProjectHeader;
