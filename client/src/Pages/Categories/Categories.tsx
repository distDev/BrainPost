import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { data } from '../../data';
import './categories.scss'

interface Props {
    
}

export const Categories = (props: Props) => {


    return (
      <div className='main-container categories'>
        <h2>Категории</h2>
        <input
          type='text'
          placeholder='Поиск категории...'
          className='categories-search'
        />
        <div className='categories-container'>
          {data.categories.map((cat) => (
            <Link to={`/single-cat/${cat.name}`} className='categories-item' key={cat.id}>
              <div className='categories-img'>
                <img src={cat?.img} alt={cat.name} />
              </div>

              <h3>{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    );
}
