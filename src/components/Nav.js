import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
  margin: '5px',
};

function Nav() {
  return (
    <nav>
      <NavLink style={navStyle} activeClassName="active" exact to="/">
        Home
      </NavLink>
      <NavLink style={navStyle} activeClassName="active" to="/about/">
        About
      </NavLink>
    </nav>
  );
}

export default Nav;
