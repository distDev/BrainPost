import axios from 'axios';
import React, { FC, useContext, useRef } from 'react';
import { Context } from '../../../Context/Context';
import { IFormType, IUser } from '../../../interfaces';
import '../forms.scss';

export interface IContx {
  user: null | IUser;
  isFetching: boolean;
  error: boolean;
  dispatch?: any;
}

export const AuthForm: FC<IFormType> = ({ setFormType }) => {
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { dispatch, isFetching } = useContext<IContx>(Context);

  const handleClick = () => {
    setFormType('register');
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({type: 'LOGIN_START'});
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current?.value,
        password: passwordRef.current?.value
      })
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      console.log(error)
      dispatch({ type: 'LOGIN_FAIL' });
    }
  };

  

  return (
    <div className='modal-content'>
      <h3>Авторизация</h3>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          className='modal-input'
          placeholder='Введите логин'
          ref={userRef}
        />
        <input
          type='text'
          className='modal-input'
          placeholder='Введите пароль'
          ref={passwordRef}
        />
        <div className='modal-btns'>
          <button type='submit' disabled={isFetching}>Войти</button>
          <button onClick={handleClick}>Регистрация</button>
        </div>
      </form>
    </div>
  );
};
