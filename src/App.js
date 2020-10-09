import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import AuthState from '../src/context/auth/AuthState';
import TodoState from '../src/context/todo/TodoState';
import PrivateRoute from './components/routing/privateRoute';

// Page
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Todo from './pages/Todo/Todo';

function App() {
  return (
    <AuthState>
      <TodoState>
        <Router history={HashRouter}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/todo" component={Todo} />
          </Switch>
        </Router>
      </TodoState>
    </AuthState>
  );
}

export default App;
