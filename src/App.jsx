import icon from "../public/Category.svg";
import "./App.css";

function App() {
  return (
    <h1>
      Hello there <img className="fill-blur-500" src={icon} alt="" />
    </h1>
  );
}

export default App;

/**
 # TODOS: Todod-List-lets acheive targets
 # [ ] form input
 # [ ] adding button
 # [ ] choose category (All, personal, work and study) when inserting a task
 # [ ] validate inserted input 
 # [ ] focus on input when enter the app and after adding a task
 # [ ] add tasks to tasks list upon click on add button
 # [ ] check/uncheck task upon click on it
 # [ ] categorize tasks by their category
 # [ ] handle empty lists (message: lets add new tasks)
 # [ ] save to local storage (saveToLocalStorage)
 # [ ] get from local storage (getFromLocalStorage)
 # [ ] delete button to each task
 # [ ] edit button to each task
 # [ ] show number of tasks of each category 4(done)/8(category tasks)

 Colors:
   Headings Color => rgb(32, 27, 23)
   Normal Fonts Color => rgb(110, 105, 101)
   Categories Colors => rgb(255, 161, 11)   rgb(254, 206, 72)   rgb(255, 107, 1)   rgb(255, 169, 74)   rgb(255, 107, 79)   rgb(255, 158, 142)
   Theme icon color => rgb(116, 107, 98)   rgb(179, 175, 166)   rgb(231, 231, 229)   
   
 */
