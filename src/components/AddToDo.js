import React from "react";
import PropTypes from 'prop-types';

const AddToDo = ({ submitFn }) => (
  <form onSubmit={submitFn}>
    <input type="text" name="title" placeholder="Add Todo..." />
    <input type="submit" value="Submit" className="btn" />
  </form>
);

export default AddToDo;

AddToDo.propTypes = {
  submitFn: PropTypes.func.isRequired
}
 