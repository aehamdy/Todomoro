import "./App.css";
import UserGreeting from "./components/UserGreeting";
import Counters from "./components/Counters";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <section className="h-[96dvh] flex flex-col gap-3 mx-2 md:mx-5 py-6 px-5 md:px-8 font-nunitosans bg-app-bg rounded-3xl overflow-hidden">
      <div>
        <UserGreeting />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6">
        <Counters />
        <TodoApp className="bg-app-bg" />
      </div>
    </section>
  );
}

export default App;
