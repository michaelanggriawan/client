import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import { Link } from 'react-router-dom';

// components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Alert from '../../components/Alert/Alert';

import './Login.css';

function Login(props) {
  // context
  const authContext = useContext(AuthContext);

  const { login, error, isAuthenticated, token, loadUser } = authContext;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');

  const inactive = email.length === 0 || password.length === 0;

  useEffect(() => {
    setTimeout(() => {
      setAlert('');
    }, 3000);
  }, [alert]);

  useEffect(() => {
    if (token) {
      loadUser();
      props.history.push('/home');
    }
  }, [isAuthenticated, token, props.history]);

  const _onSubmit = async (e) => {
    if (email === '' || password === '') {
      setAlert('Email and password required');
    }

    if (error) {
      setAlert(error);
    }

    e.preventDefault();
    login({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="login-alert">
        {alert.length > 0 && <Alert>{alert}</Alert>}
      </div>
      <div className="login-container">
        <div className="login-content-container">
          <div className="login-content">
            <h1 className="login-text-header">TODO - LOGIN</h1>
            <form onSubmit={_onSubmit}>
              <div className="pb4">
                <Input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                />
              </div>
              <div className="pb">
                <Input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
              </div>
              <Link to="/register" className="login-register">
                <span>Don't have an account ? </span>
              </Link>
              <Button type="submit" block={true} disabled={inactive}>
                <span className="font20">LOGIN</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
