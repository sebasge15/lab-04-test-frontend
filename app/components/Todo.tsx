"use client";
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList, { Todo } from "./TodoList";
import TodoFilter, { FilterType } from "./TodoFilter";
import TodoStats from "./TodoStats";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  // Cargar todos del localStorage al iniciar
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (e) {
        console.error("Error al cargar tareas:", e);
      }
    }
  }, []);

  // Guardar todos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">Lista de Tareas</h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

      <TodoList
        todos={filteredTodos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />

      {todos.length > 0 && (
        <div className="mt-6">
          <TodoStats todos={todos} onClearCompleted={clearCompleted} />
        </div>
      )}
    </div>
  );
}
