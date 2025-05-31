import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList, { Todo } from "../TodoList";

// Mock del componente TodoItem para aislar las pruebas
jest.mock("../TodoItem", () => {
  return function MockTodoItem({
    id,
    text,
    completed,
  }: {
    id: number;
    text: string;
    completed: boolean;
  }) {
    return (
      <div
        data-testid={`todo-item-${id}`}
        className={completed ? "completed" : ""}
      >
        {text}
      </div>
    );
  };
});

describe("TodoList Component", () => {
  // Happy path tests
  it("renderiza un mensaje cuando no hay tareas", () => {
    // Prepare: Configuración con lista vacía
    const todos: Todo[] = [];
    const mockToggle = jest.fn();
    const mockDelete = jest.fn();

    // Execute: Renderizar el componente
    render(
      <TodoList
        todos={todos}
        onToggleTodo={mockToggle}
        onDeleteTodo={mockDelete}
      />
    );

    // Validate: Verificar que se muestra el mensaje de lista vacía
    expect(screen.getByTestId("empty-todos")).toBeInTheDocument();
    expect(screen.getByTestId("empty-todos")).toHaveTextContent(
      "No hay tareas pendientes"
    );
  });

  it("renderiza correctamente una lista de tareas", () => {
    // Prepare: Configuración con lista de tareas
    const todos: Todo[] = [
      { id: 1, text: "Tarea 1", completed: false },
      { id: 2, text: "Tarea 2", completed: true },
      { id: 3, text: "Tarea 3", completed: false },
    ];
    const mockToggle = jest.fn();
    const mockDelete = jest.fn();

    // Execute: Renderizar el componente
    render(
      <TodoList
        todos={todos}
        onToggleTodo={mockToggle}
        onDeleteTodo={mockDelete}
      />
    );

    // Validate: Verificar que se renderizan todas las tareas
    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
    expect(screen.getByTestId("todo-item-1")).toBeInTheDocument();
    expect(screen.getByTestId("todo-item-2")).toBeInTheDocument();
    expect(screen.getByTestId("todo-item-3")).toBeInTheDocument();
  });

  // EJERCICIO 3: Completa el siguiente test para verificar que el componente
  // maneja correctamente los eventos de toggle y delete para cada tarea
  it("pasa correctamente las funciones onToggle y onDelete a cada TodoItem", () => {
    // TODO: Implementar el test siguiendo el patrón Prepare, Execute, Validate
    // Pista: Deberás modificar el mock de TodoItem para verificar que recibe las props correctas
  });
});
