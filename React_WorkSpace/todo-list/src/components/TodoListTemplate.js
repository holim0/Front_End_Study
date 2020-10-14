import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({ form, children }) => {
    // 비구조화 할당
    return (
        <main className="todo-list-template">
            <div className="title">Today's ToDo</div>

            <section className="form-wrapper">{form}</section>
            <section className="todos-wrapper">{children}</section>
        </main>
    );
};

export default TodoListTemplate;
