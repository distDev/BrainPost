import React from 'react';
import { IFormType } from '../../../interfaces';
import '../forms.scss';

export const RegisterForm = ({ setFormType }: IFormType) => {
  const handleClick = () => {
    setFormType('auth');
  };
  return (
    <div className='modal-content'>
      <h3>Регистрация</h3>
      <input type='text' className='modal-input' placeholder='Придумайте логин'/>
      <input type='text' className='modal-input' placeholder='Введите почту'/>
      <input type='text' className='modal-input' placeholder='Введите пароль'/>
      <div className='modal-btns'>
        <button>Зарегистрироваться</button>
        <button onClick={handleClick}>Авторизация</button>
      </div>
    </div>
  );
};
