import React from "react";
import { connect } from "react-redux";
import { createAction } from "../store";
import { Link } from "react-router-dom";
const Todo = ({ text, delTodo, id }) => {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={delTodo}>DEL</button>
        </li>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        delTodo: () => dispatch(createAction.delTodo(ownProps.id)),
    };
};

export default connect(null, mapDispatchToProps)(Todo);
