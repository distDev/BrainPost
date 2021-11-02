import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../interfaces';

interface IFullPostContent {
  fullPost: IPost;
  id: any;

}

const FullPostContent: FC<IFullPostContent> = ({ fullPost, id }) => {
  
  const bodyPost = fullPost.body.map((e) => e.blocks)[0];
  

  return (
    <>
      <div className='fullpost-container'>
        <div className='post-header-desc'>
          <Link to={`/single-cat/${fullPost.categories}`} className='cat'>
            {fullPost.categories}
          </Link>
          <Link to='/profile' className='author'>
            {fullPost.username}
          </Link>
          <p>{new Date(fullPost.createdAt).toDateString()}</p>
        </div>
        <div className='fullpost-content'>
          {bodyPost.slice(0, 1).map((e) => (
            <h1>{e.data.text}</h1>
          ))}
          {bodyPost.slice(1).map((e) => (
            <p>{e.data.text}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default FullPostContent;