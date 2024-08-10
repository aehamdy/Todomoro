import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return <TodoApp />;
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
 # [ ] clear all completed todos of all categories button
 # [ ] clear all checked todos of the selected category button
 # [ ] a flag that displays a number of left todos

 # FIXME: number of toods change when click on any category button!

 Colors:
   Headings Color => rgb(32, 27, 23)
   Normal Fonts Color => rgb(110, 105, 101)
   Categories Colors => rgb(255, 161, 11)   rgb(254, 206, 72)   rgb(255, 107, 1)   rgb(255, 169, 74)   rgb(255, 107, 79)   rgb(255, 158, 142)
   Theme icon color => rgb(116, 107, 98)   rgb(179, 175, 166)   rgb(231, 231, 229)   
   
 */
