import React from 'react'
import { IFormType } from '../../../interfaces';




export const RegisterForm = ({ setFormType }: IFormType) => {

     const handleClick = () => {
       setFormType('auth');
     };
  return (
    <div className='modal-content'>
      <h3>Регистрация</h3>
      <input type='text' className='modal-input' />
      <input type='text' className='modal-input' />
      <button>Зарегистрироваться</button>
      <button onClick={handleClick}>Авторизация</button>
    </div>
  );
};
