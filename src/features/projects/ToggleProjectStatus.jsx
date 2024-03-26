import { Switch } from "@headlessui/react";
import { useState } from "react";
import useToggleProjectStatus from "./useToggleProjectStatus";

const ToggleProjectStatus = ({ project }) => {
  const [enabled, setEnabled] = useState(
    project.status === "OPEN" ? true : false
  );

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus(
      {
        id: project._id,
        data: { status },
      },
      {
        onSuccess: () => {
          setEnabled((prev) => !prev);
        },
      }
    );
  };

  return (
    <div>
      <Switch.Group>
        <div className="flex items-center justify-between w-[88px]">
          <Switch.Label className="me-4">
            {project.status === "OPEN" ? "باز" : "بسته"}
          </Switch.Label>
          <Switch
            checked={enabled}
            onChange={toggleHandler}
            className={`${
              enabled ? "bg-primary-900" : "bg-secondary-200"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
          >
            <span
              className={`${
                enabled ? "-translate-x-6" : "-translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </Switch.Group>
    </div>
  );
};

export default ToggleProjectStatus;
