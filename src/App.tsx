import { lazy, Suspense, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import TodoList from "./pages/TodoList";

const LazyModal = lazy(() => import("./components/Modal"));

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <Routes>
      <Route path="/to-do" element={<TodoList/>}/>
    </Routes>
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
