import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { navbarList } from './navbarList';

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div className='nav-stic'>
      <div className='navbar'>
        {navbarList.map((nav) => (
          <NavLink to={nav.link} exact activeClassName='selected'>
            {nav.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
