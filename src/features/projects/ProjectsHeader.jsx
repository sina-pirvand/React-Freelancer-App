import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import Modal from "../../common/Modal";
import CreateProjectForm from "./CreateProjectForm";

const ProjectsHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between mb-6">
      <p className="ps-4 font-bold text-3xl text-secondary-900">پروژه ها</p>
      <div>
        <Modal
          title="اضافه کردن پروژه جدید"
          open={open}
          onClose={() => setOpen(false)}
        >
          <CreateProjectForm onClose={() => setOpen(false)} />
        </Modal>
        <button
          onClick={() => setOpen(true)}
          className="btn btn-primary flex items-center gap-x-2"
        >
          <TiPlus className="font-extrabold" />
          <span>اضافه کردن پروژه</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectsHeader;
