import TodoApp from "./components/Todo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-10">
        <TodoApp />
      </div>
    </div>
  );
}
