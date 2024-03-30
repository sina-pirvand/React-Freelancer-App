import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import Modal from "../../common/Modal";
import CreateProjectForm from "../../features/projects/CreateProjectForm";

const DashboardHeader = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="font-bold text-4xl text-secondary-900 mb-4">
          در یک نگاه
        </h1>
        <p className="font-bold text-secondary-400">
          خلاصه ای از آمار خود را اینجا ببینید
        </p>
      </div>
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

export default DashboardHeader;
