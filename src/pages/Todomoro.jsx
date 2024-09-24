import Counters from "../components/Counters";
import UserGreeting from "../components/UserGreeting";
import TodoApp from "../components/TodoApp";

function Todomoro() {
  return (
    <main className="font-nunitosans flex flex-col gap-3 bg-app-bg py-9 px-8 rounded-3xl">
      <div>
        <UserGreeting />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6">
        <Counters />
        <TodoApp className="bg-app-bg" />
      </div>
    </main>
  );
}

export default Todomoro;
