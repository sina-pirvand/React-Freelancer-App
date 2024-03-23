import { IoClose } from "react-icons/io5";
import useClickOutside from "../../features/projects/useClickOutside";

const Modal = ({ open, onClose, title, children }) => {
  const ref = useClickOutside(onClose);

  return (
    open && (
      //Backdrop
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen z-50 bg-secondary-800 bg-opacity-30">
        {/* content  */}
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md bg-secondary-0 p-4 
        transition-all duration-300 ease-in-out w-80 md:w-96 lg:w-[32rem] max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div className="flex items-center justify-between p-1 pb-2 mb-5 border-b-2 border-secondary-200">
            <p className="font-bold text-xl">{title}</p>
            <IoClose
              onClick={onClose}
              className="w-6 h-6 cursor-pointer hover:rotate-180 transition-all duration-700"
            />
          </div>
          <p className="text-wrap">{children}</p>
        </div>
      </div>
    )
  );
};

export default Modal;
