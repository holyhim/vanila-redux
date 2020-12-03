import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Create at : {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, props) {
  const {
    match: {
      params: { id },
    },
  } = props;
  return { toDo: state.find((todo) => todo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
