import Counters from "../components/Counters";
import Header from "../components/Header";
import TodoApp from "../components/TodoApp";

function Todomoro() {
  return (
    <main className="font-nunitosans grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6 bg-app-bg py-9 px-8 rounded-3xl">
      <Header />
      <Counters />
      <TodoApp className="bg-app-bg" />
    </main>
  );
}

export default Todomoro;
