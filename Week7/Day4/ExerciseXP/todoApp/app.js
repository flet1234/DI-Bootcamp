import { TodoList } from "./todo.js";

let newList= new TodoList
newList.addTask('Buy car')
newList.addTask('Sell car')
newList.addTask('Sell Buy')
newList.completeTask('Buy car')
newList.allTasks()