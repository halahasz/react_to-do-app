import React, { Component } from "react";

class ToDoItem extends Component {
  render() {
    const { title, id, completed, markFn, delFn } = this.props;
    return (
      <>
        <div className={completed ? "todo-item is-complete" : "todo-item"}>
          <p>
            <input
              type="checkbox"
              onChange={markFn.bind(this, id)}
              checked={completed}
            />
            <span>{title}</span>
            <button className="del" onClick={() => delFn(id)}>
              x
            </button>
          </p>
        </div>
      </>
    );
  }
}

export default ToDoItem;
