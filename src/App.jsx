import "./App.css";
import Counters from "./components/Counters";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <main className="flex flex-col md:flex-row md:justify-between md:gap-10 bg-app-bg py-9 px-8 rounded-3xl">
      <Counters />
      <TodoApp className="bg-app-bg" />
    </main>
  );
}

export default App;

/**
 # TODOS: Todod-List-lets acheive targets
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
 # [ ] hide cycle selector and start button while timer is running
 # [ ] Create two buttons to select whether PomodoroApp or NormalCounter
 # [ ] make timer's bg transparent while it is not running
 # [ ] make timer's bg red when session cycle is running and green when rest cycle is running
 # [ ] button to hide all checked todos
 # [ ] show/hide Clear Completed button depending on checked todos
 # [ ] add keyboard accessebility to input field
 # [ ] clear all checked todos of the selected category button



 Colors:
   Headings Color => rgb(32, 27, 23)
   Normal Fonts Color => rgb(110, 105, 101)
   Categories Colors => rgb(255, 161, 11)   rgb(254, 206, 72)   rgb(255, 107, 1)   rgb(255, 169, 74)   rgb(255, 107, 79)   rgb(255, 158, 142)
   Theme icon color => rgb(116, 107, 98)   rgb(179, 175, 166)   rgb(231, 231, 229)   
   
 */
