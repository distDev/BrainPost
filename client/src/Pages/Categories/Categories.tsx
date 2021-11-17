import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ICategories } from '../../interfaces';

import './categories.scss';



export const Categories:FC = () => {
  const [cat, setCat] = useState<ICategories[]>([]);

  useEffect(() => {
    const fetchCat = async () => {
      const res = await axios.get('/categories/');
      setCat(res.data);
    };
    fetchCat();
  }, []);


  return (
    <div className='main-container categories'>
      <h2>Категории</h2>
      <input
        type='text'
        placeholder='Поиск категории...'
        className='categories-search'
      />
      <div className='categories-container'>
        {cat === undefined
          ? 'Загружается'
          : cat.map((e) => (
              <Link
                to={`/single-cat/${e.name}`}
                className='categories-item'
                key={e._id}
              >
                <div className='categories-img'>
                  <img
                    src='https://media.lpgenerator.ru/uploads/2017/10/17/1.png'
                    alt=''
                  />
                </div>

                <h3>{e.name}</h3>
              </Link>
            ))}
      </div>
    </div>
  );
};
