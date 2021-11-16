import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Context } from '../../../Context/Context';
import { IContx } from '../../forms/authForm/AuthForm';
import './navbar.scss';
import { navbarList } from './navbarList';

export const Navbar = () => {
  const { user, dispatch } = useContext<IContx>(Context);
  const history = useHistory();

  const handleQuit = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
  };

  return (
    <div className='nav-stic'>
      <div className='navbar'>
        <div className='navbar-links'>
          {navbarList.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.link}
              exact
              activeClassName='selected'
            >
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
        {user ? (
          <button className='nav-quit' onClick={handleQuit}>
            Выйти
          </button>
        ) : null}
      </div>
    </div>
  );
};
