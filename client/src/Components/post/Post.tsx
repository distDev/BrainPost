import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../interfaces';
import './Post.scss';

interface IPosts {
  post: IPost;
}

export const Post: FC<IPosts> = ({ post }) => {
  return (
    <div className='post' key={post.id} id={post.id}>
      <div className='post-header'>
        <div className='post-header-desc'>
          <Link to={`/${post.cat}`} className='cat'>
            {post.cat}
          </Link>
          <Link to={`/profile/${post.id}`} className='author'>
            {post.author}
          </Link>
          <p>{post.date}</p>
        </div>

        <div className='post-header-desc'>
          <Link className='post-title' to={`/post/${post.id}`}><h2>{post.title}</h2></Link>
        </div>
      </div>
      <div className='post-img-container'>
        <img src={post.img} alt='' />
      </div>
    </div>
  );
};
