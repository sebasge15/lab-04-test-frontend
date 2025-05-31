import { useState, FormEvent } from "react";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6" data-testid="todo-form">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded"
          placeholder="Añadir nueva tarea..."
          data-testid="todo-input"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          disabled={!text.trim()}
          data-testid="todo-submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}
