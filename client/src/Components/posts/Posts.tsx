import React from 'react'
import { data } from '../../data';
import { Post } from '../post/Post';

interface Props {
    
}

export const Posts = (props: Props) => {
    return (
      <div className='post-container'>
        {data.posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    );
}
