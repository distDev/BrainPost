import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../interfaces';
import './Post.scss';

interface IPosts {
  post: IPost,
}

export const Post: FC<IPosts> = ({ post }) => {
  const body = post.body.map((e) => e.blocks)[0];
 
  return (
    <div className='post' key={post._id} id={post._id}>
      <div className='post-header'>
        <div className='post-header-desc'>
          <Link to={`/${post.categories}`} className='cat'>
            <p>{post.categories}</p>
          </Link>
          <Link to={`/profile/${post._id}`} className='author'>
            {post.username}
          </Link>
          <p>{new Date(post.createdAt).toDateString()}</p>
        </div>

        <div className='post-content-mini'>
          <Link className='post-title' to={`/post/${post._id}`}>
            {body.slice(0, 1).map((e) => (
              <h3>{e.data.text}</h3>
            ))}
          </Link>

          {body.slice(1, 2).map((e) => (
            <p>{e.data.text.slice(0, 150)}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
