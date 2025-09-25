import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const todos = [
  { id: 1, text: "task 1", completed: false },
  { id: 2, text: "task 2", completed: true },
];

const TodoList = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo..."
          className="flex-1 border rounded-md p-2"
        />
        <button
          onClick={() => {}}
          className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 shadow rounded-md"
          >
            <span
              onClick={() => {}}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => {}}
              className="text-red-600 hover:text-red-800"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
