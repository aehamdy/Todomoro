import "./App.css";
import Counters from "./components/Counters";
import Home from "./pages/Home";
import TodoApp from "./components/TodoApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todomoro from "./pages/Todomoro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <Todomoro />,
  },
]);

function App() {
  return (
    // <main className="font-nunitosans grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6 bg-app-bg py-9 px-8 rounded-3xl">
    //   {/* <Counters />
    //   <TodoApp className="bg-app-bg" /> */}
    //   {/* <Home /> */}
    // </main>
    <RouterProvider router={router} />
  );
}

export default App;

/**
 # TODOS: Todo-List-lets achieve targets
 # [x] form input
 # [x] adding button
 # [x] validate inserted input 
 # [x] clear input field upon click on adding button
 # [x] add tasks to tasks list upon click on add button
 # [x] add X icon to input to clear the field
 # [x] check/uncheck task upon click on it
 # [x] choose category (All, personal, work and study) when inserting a task
 # [x] handle empty lists (message: lets add new tasks)
 # [x] save to local storage (saveToLocalStorage)
 # [x] get from local storage (getFromLocalStorage)
 # [x] update local storage when check/uncheck todos
 # [x] delete button to each task
 # [x] edit button to each task
 # [x] categorize tasks by their category
 # [x] show category of each task underneath the task value
 # [x] focus on input when enter the app and after adding a task
 # [x] show number of tasks of each category 4(done)/8(category tasks)
 # [x] FIX: number of toods change when click on any category button!
 # [x] clear all completed todos button
 # [x] a flag that displays a number of left todos
 # [x] display timer and start button when cycle is selected 
 # [x] Create two buttons to select whether PomodoroApp or NormalCounter
 # [x] hide cycle selector and start button while timer is running
 # [x] show/hide Clear Completed button depending on checked todos
 # [ ] add pomodoro session/rest session finish sound
 # [ ] button to hide all checked todos

 # [x] user insert his name
 # [x] save the user's name at local storage
 # [x] display the name at the header component
 # [ ] validate the inserted name on blurring input field
 # [ ] display a proper error message 
**/
