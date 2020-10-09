import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';

import TodoContext from '../../context/todo/TodoContext';

import './Todo.css';

function Todo() {
  const { todos, deleteTodo, todoList } = useContext(TodoContext);

  useEffect(() => {
    todoList();
  }, []);

  return (
    <div className="todo-container">
      <Header />
      <div className="todo-content">
        <ul>
          {todos &&
            todos.map((todo, i) => {
              return (
                <li
                  key={todo._id}
                  className="todo-item font20"
                  style={{ backgroundColor: i % 2 === 0 ? 'white' : '#fe4500' }}
                >
                  <div>
                    <span
                      className="mr10"
                      style={{ color: i % 2 === 0 ? '#fe4500' : 'white' }}
                    >
                      {i + 1}
                    </span>
                    <span style={{ color: i % 2 === 0 ? '#fe4500' : 'white' }}>
                      {todo.task}
                    </span>
                  </div>
                  <div>
                    <span
                      className="mr10"
                      style={{ color: i % 2 === 0 ? '#fe4500' : 'white' }}
                    >
                      {todo.status}
                    </span>
                    <i
                      className="fa fa-trash mr10"
                      style={{ color: i % 2 === 0 ? '#fe4500' : 'white' }}
                      onClick={() => deleteTodo(todo._id)}
                    ></i>
                    <i
                      className="fa fa-pencil"
                      style={{ color: i % 2 === 0 ? '#fe4500' : 'white' }}
                      
                    ></i>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
