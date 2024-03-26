import { useState } from "react";

function AddTodo({ onNewItem }) {
    const [todoname, setToDoname] = useState("");
    const todayDate = new Date().toISOString().split("T")[0];
    const [tododate, setToDodate] = useState(todayDate);

    const handelNameChange = (event) => {
        setToDoname(event.target.value);
    }

    const handelDateChange = (event) => {
        setToDodate(event.target.value);
    }

    const handelAddbuttonClicked = () => {
        if (todoname.trim() !== "") {
            onNewItem(todoname, tododate);
            setToDodate(todayDate);
            setToDoname("");
        }
    }

    return (
        <div className="container AddTodoSec">
            <div className="row">
                <div className="col-6">
                    <input type="text" placeholder="Enter ToDo Here" onChange={handelNameChange} value={todoname} />
                </div>
                <div className="col-4">
                    <input type="date" onChange={handelDateChange} value={tododate} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success" onClick={handelAddbuttonClicked}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;
