import React, {  FC, MouseEvent,  } from 'react'
import { IFormType } from '../../../interfaces';



export const AuthForm: FC<IFormType> = ({ setFormType }) => {

    const handleClick = () => {
        setFormType('register')
    }

  return (
    <div className='modal-content'>
      <h3>Авторизация</h3>
      <input type='text' className='modal-input' />
      <input type='text' className='modal-input' />
      <button>Войти</button>
      <button onClick={handleClick}>Регистрация</button>
    </div>
  );
};
