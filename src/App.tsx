import { lazy, Suspense, useState } from "react";
import "./App.css";

const LazyModal = lazy(() => import("./components/Modal"));

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="bg-cyan-800 text-white rounded-md p-3 hover:bg-cyan-700"
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </button>
      <Suspense fallback={<div>Loading modal...</div>}>
        <LazyModal isOpen={openModal} onClose={() => setOpenModal(false)} title="My modal component" content="A modal with react lazy loading!" />
      </Suspense>
    </>
  );
}

export default App;
