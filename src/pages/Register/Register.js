import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import { Link } from 'react-router-dom';

// components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Alert from '../../components/Alert/Alert';

import './Register.css';

function Register() {
  // context
  const authContext = useContext(AuthContext);

  const { register, error, isAuthenticated, token } = authContext;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [alert, setAlert] = useState('');

  const inactive =
    email.length === 0 || password.length === 0 || name.length === 0;

  useEffect(() => {
    setTimeout(() => {
      setAlert('');
    }, 3000);
  }, [alert]);

  const _onSubmit = async (e) => {
    if (email === '' || password === '' || name === '') {
      setAlert('There was empty field !');
    }

    e.preventDefault();
    register({ email, password, name });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="register-alert">
        {alert.length > 0 && <Alert>{alert}</Alert>}
      </div>
      <div className="register-container">
        <div className="register-content-container">
          <div className="register-content">
            <h1 className="register-text-header">TODO - register</h1>
            <form onSubmit={_onSubmit}>
              <div className="pb4">
                <Input
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="name"
                />
              </div>
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
              <Link to="/" className="register-login">
                <span>Already have an account ?</span>
              </Link>
              <Button type="submit" block={true} disabled={inactive}>
                <span className="font20">REGISTER</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
