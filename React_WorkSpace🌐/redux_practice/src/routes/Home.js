import React from "react";
import { Route } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { createAction } from "../store";
import Todo from "../components/Todo";

const Home = ({ todos, addTodo }) => {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
        addTodo(text);
    };

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>ADD</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} id={todo.id} />
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = (state) => {
    return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(createAction.addTodo(text)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
