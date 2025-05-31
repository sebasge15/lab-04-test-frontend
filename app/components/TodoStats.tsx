import { Todo } from "./TodoList";

interface TodoStatsProps {
  todos: Todo[];
  onClearCompleted: () => void;
}

export default function TodoStats({ todos, onClearCompleted }: TodoStatsProps) {
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  const completionPercentage =
    totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 rounded">
      <div className="mb-4 md:mb-0" data-testid="todo-count">
        <p className="text-sm text-gray-600">
          {activeTodos} tareas pendientes | {completedTodos} completadas
        </p>
        <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${completionPercentage}%` }}
            data-testid="progress-bar"
          ></div>
        </div>
      </div>
      <button
        onClick={onClearCompleted}
        className="px-3 py-1 text-sm text-red-500 bg-white rounded border border-red-500 hover:bg-red-50 disabled:opacity-50"
        disabled={completedTodos === 0}
        data-testid="clear-completed"
      >
        Limpiar completadas
      </button>
    </div>
  );
}
