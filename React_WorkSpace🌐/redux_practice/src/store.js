import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => ({ type: ADD, text });

const delTodo = (id) => ({ type: DELETE, id });

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE:
            return state.filter((toDo) => toDo.id !== action.id);

        default:
            return state;
    }
};

const store = createStore(reducer);

export const createAction = { addTodo, delTodo };

export default store;
