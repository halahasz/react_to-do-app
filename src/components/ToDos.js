import React from "react";
import ToDoItem from "./ToDoItem";

const ToDos = ({ todos, markFn, delFn }) => {
  return (
    <>
      {todos.map(todo => (
        <ToDoItem key={todo.title} {...todo} markFn={markFn} delFn={delFn} />
      ))}
    </>
  );
};

export default ToDos;
