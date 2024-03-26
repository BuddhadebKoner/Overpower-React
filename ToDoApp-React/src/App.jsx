import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import WellcomeMessage from "./components/congomessage";
import { useState } from "react";

function App() {

  const [TodoItems, SetTodoItems] = useState([]);

  const handelNewItems = (itemname, Itemduedate) => {
    console.log(`New item added name : ${itemname} DueDate :${Itemduedate}`)
    const newtodoItems = [
      ...TodoItems, {
        Name: itemname,
        DueDate: Itemduedate
      }
    ]
    SetTodoItems(newtodoItems)
  }

  const handelDeletion = (TodoItemName) => {
    const NewtodoItemsAfterdelete = TodoItems.filter((item) => item.Name !== TodoItemName);
    SetTodoItems(NewtodoItemsAfterdelete);
    console.log(`Item is deleted ${TodoItemName}`);
  }

  return (
    <>
      <center>
        <Appname />
        <AddTodo onNewItem={handelNewItems} />
        {TodoItems.length === 0 && <WellcomeMessage></WellcomeMessage>}
        <div className="Itemcontaier">
          <TodoItem TodoItemsList={TodoItems} onDeleteClick={handelDeletion}></TodoItem>
        </div>
      </center>

    </>
  )
}

export default App
