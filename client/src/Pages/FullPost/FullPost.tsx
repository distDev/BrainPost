import React from 'react';
import { useParams } from 'react-router';
import './fullpost.scss';
import { data } from '../../data';
import { Link } from 'react-router-dom';

interface Props {}

export const FullPost = (props: Props) => {
  const { id }: any = useParams();
  return (
    <div className='fullpost-container'>
      {data.posts
        .filter((post) => post.id === id)
        .map((post) => (
          <>
            <div className='post-header-desc'>
              <Link to={`/single-cat/${post.cat}`} className='cat'>
                {post.cat}
              </Link>
              <Link to='/profile' className='author'>
                {post.author}
              </Link>
              <p>{post.date}</p>
            </div>
            <h2>{post.title}</h2>
            <img src={post?.img} alt='' />
            <p>{post.text}</p>
          </>
        ))}
    </div>
  );
};
