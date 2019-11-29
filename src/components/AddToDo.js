import React from "react";

const AddToDo = ({ submitFn }) => (
  <form onSubmit={submitFn}>
    <input type="text" name="title" placeholder="Add Todo..." />
    <input type="submit" value="Submit" className="btn" />
  </form>
);

export default AddToDo;
 