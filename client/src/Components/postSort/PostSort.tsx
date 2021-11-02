import React from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { sortData } from './sortData';

interface Props {
    
}

export const PostSort = (props: Props) => {

    const loc = useLocation();

    return (
      <div className='post-sort-container'>
        <div className='post-sort'>
          {sortData.map((sort) => (
            <Link
              to={sort.path}
              className={loc.pathname === sort.path ? 'active-sort' : ''}
            >
              {sort.name}
            </Link>
          ))}
        </div>
      </div>
    );
}
