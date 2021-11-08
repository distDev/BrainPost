import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../utils/data';

interface Props {}

export const NewPosts = (props: Props) => {
  return (
    <div className='main-new'>
      <h4>Новые записи</h4>
      <div className='main-new-container'>
        {data.posts.slice(0, 3).map((post) => (
          <Link to='/pos'>{post.title.slice(0, 100) + '...'}</Link>
        ))}
      </div>
    </div>
  );
};
