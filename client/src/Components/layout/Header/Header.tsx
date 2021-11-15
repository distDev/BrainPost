import React, { FC, useContext, useState } from 'react';
import { Context } from '../../../Context/Context';
import { IUser } from '../../../interfaces';
import { IContx } from '../../forms/authForm/AuthForm';
import BasicModal from '../../modals/Modals';

import './header.scss';


interface IHeader {
  user: IUser
}

export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useContext<IContx>(Context);

  console.log(user)
  return (
    <>
      <header className='header'>
        <a href='#'>BrainPost</a>
        <BasicModal
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        />
        {user ? (
          <h2>{user.username}</h2>
        ) : (
          <button onClick={handleOpen}>Войти</button>
        )}
      </header>
    </>
  );
};
