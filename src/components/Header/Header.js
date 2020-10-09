import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

import './Header.css';

function Header() {
  const { logout, user } = useContext(AuthContext);
  return (
    <div className="header-container">
      <div className="header-menu">
        <Link to="/home" className="mr10 menu-list">
          HOME
        </Link>
        <Link to="/todo" className="menu-list">
          TO DO
        </Link>
      </div>
      <div className="header-profile">
        {user && <Link className="menu-list">{user.name}</Link>}
        <Link className="ml10 menu-list" onClick={() => logout()}>
          LOG OUT
        </Link>
      </div>
    </div>
  );
}
export default Header;
