import { motion, AnimatePresence } from "framer-motion";

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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            key="modal"
            className="bg-white rounded-xl w-96 p-6 shadow-lg"
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
