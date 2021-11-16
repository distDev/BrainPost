import axios from 'axios';
import React, { useRef } from 'react';
import { IFormType } from '../../../interfaces';
import '../forms.scss';

export const RegisterForm = ({ setFormType }: IFormType) => {
 
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  

  const handleClick = () => {
    setFormType('auth');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', {
        username: userRef.current?.value,
        password: passwordRef.current?.value,
        email: mailRef.current?.value,
      });
      setFormType('auth');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='modal-content'>
      <h3>Регистрация</h3>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          className='modal-input'
          placeholder='Введите логин'
          ref={userRef}
        />
        <input
          type='password'
          className='modal-input'
          placeholder='Введите пароль'
          ref={passwordRef}
        />
        <input
          type='text'
          className='modal-input'
          placeholder='Введите почту'
          ref={mailRef}
        />
        <div className='modal-btns'>
          <button type='submit'>Регистрация</button>
          <button onClick={handleClick}>Войти</button>
        </div>
      </form>
    </div>
  );
};
