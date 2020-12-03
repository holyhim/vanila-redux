import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators, remove } from "../store";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text} </Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, props) {
  return {
    onBtnClick: () => dispatch(remove(props.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
