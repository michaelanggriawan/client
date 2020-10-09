import React, { useReducer } from 'react';
import {
  TODO_SUBMIT_FAIL,
  TODO_SUBMIT_SUCCESS,
  TODO_LIST,
  UPDATE_TODO,
  DELETE_TODO,
} from '../types';

import todoReducer from './TodoReducer';
import TodoContext from './TodoContext';

import axios from 'axios';

const TodoState = (props) => {
  const initialState = {
    error: null,
    todos: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const submitTodo = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    };

    try {
      const res = await axios.post(
        'http://localhost:5000/todo/add',
        formData,
        config,
      );

      dispatch({
        type: TODO_SUBMIT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TODO_SUBMIT_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const deleteTodo = async (id) => {
    console.log(id);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    };

    try {
      await axios.delete(`http://localhost:5000/todo/${id}`, config);

      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TODO_SUBMIT_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const updateTodo = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    };

    try {
      const res = await axios.put(
        `http://localhost:5000/todo/${formData._id}`,
        formData,
        config,
      );

      dispatch({
        type: UPDATE_TODO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TODO_SUBMIT_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const todoList = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    };

    try {
      const res = await axios.get(
        'http://localhost:5000/todo/all',
        formData,
        config,
      );

      dispatch({
        type: TODO_LIST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TODO_SUBMIT_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        error: state.error,
        todos: state.todos,
        submitTodo,
        todoList,
        deleteTodo,
        updateTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
