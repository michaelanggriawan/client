import {
  TODO_SUBMIT_FAIL,
  TODO_SUBMIT_SUCCESS,
  TODO_LIST,
  DELETE_TODO,
  UPDATE_TODO,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_TODO:
      return {
        ...state,
      };
    case DELETE_TODO:
      const newTodos = state.todos.filter((todo) => todo._id != action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    case TODO_LIST:
      return {
        ...state,
        todos: action.payload,
      };
    case TODO_SUBMIT_SUCCESS:
      return {
        ...state,
      };
    case TODO_SUBMIT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
