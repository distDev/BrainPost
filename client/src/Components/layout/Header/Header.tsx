import React, { useState } from 'react';
import BasicModal from '../../modals/Modals';

import './header.scss';


interface Props {}

export const Header = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <header className='header'>
        <a href='#'>BrainPost</a>
        <BasicModal
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        />
        <button onClick={handleOpen}>Войти</button>
      </header>
    </>
  );
};
