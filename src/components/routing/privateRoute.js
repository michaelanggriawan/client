import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import TodoContext from '../../context/todo/TodoContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loading, token, loadUser } = useContext(AuthContext);
  const { todoList } = useContext(TodoContext);

  useEffect(() => {
    if (token) {
      loadUser();
      todoList();
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !token ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
