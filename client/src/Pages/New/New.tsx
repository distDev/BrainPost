import React from 'react';
import { Posts } from '../../Components/posts/Posts';
import { PostSort } from '../../Components/postSort/PostSort';

interface Props {}

export const New = (props: Props) => {
  return (
    <div className='main-container'>
     <PostSort />
      <Posts />
    </div>
  );
};
