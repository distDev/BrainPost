import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../../Context/Context';
import { IContx } from '../../forms/authForm/AuthForm';
import './navbar.scss';
import { navbarList } from './navbarList';

interface Props {}

export const Navbar = (props: Props) => {
  const { user } = useContext<IContx>(Context);
  return (
    <div className='nav-stic'>
      <div className='navbar'>
        {navbarList.map((nav) => (
          <NavLink key={nav.id} to={nav.link} exact activeClassName='selected'>
            {nav.title}
          </NavLink>
        ))}

        {user ? (
          <NavLink
            key={user._id}
            to={`/profile/${user._id}`}
            exact
            activeClassName='selected'
          >
            Моя страница
          </NavLink>
        ) : null}
      </div>
    </div>
  );
};
