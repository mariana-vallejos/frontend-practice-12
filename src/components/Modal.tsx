import { useEffect, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
};

const Modal = ({
  isOpen = false,
  onClose,
  title = "Modal Title",
  content = "Your content goes here",
}: ModalProps) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      // delay unmount until animation finishes
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-xl w-96 p-6 shadow-lg transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <h4 className="text-center text-xl font-semibold">{title}</h4>
        <p className="py-3 my-3 px-2">{content}</p>
        <div className="flex justify-end pt-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border text-white bg-gray-400 border-gray-300 hover:bg-gray-500 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
