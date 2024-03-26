function TodoItem({ TodoItemsList, onDeleteClick }) {
  return (
    <div className="container">
      {TodoItemsList.map((todoItem, index) => (
        <div key={index} className="row">
          <div className="col-6">
            {todoItem.Name}
          </div>
          <div className="col-4">
            {todoItem.DueDate}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger" onClick={() => onDeleteClick(todoItem.Name)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
