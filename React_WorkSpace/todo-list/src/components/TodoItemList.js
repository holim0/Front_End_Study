import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map((
            { id, text, checked } //컴포넌트 배열로 변경.
        ) => (
            <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
            />
        ));

        return <div>{todoList}</div>;
    }
}

export default TodoItemList;
