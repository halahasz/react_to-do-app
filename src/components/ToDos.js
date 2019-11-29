import React from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from 'prop-types';

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

ToDos.propTypes = {
  todos: PropTypes.array.isRequired,
  markFn: PropTypes.func.isRequired,
  delFn: PropTypes.func.isRequired
}