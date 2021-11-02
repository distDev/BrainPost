
import React from 'react';
import { NewPosts } from '../../Components/newPosts/NewPost';
import { Posts } from '../../Components/posts/Posts';
import { PostSort } from '../../Components/postSort/PostSort';

import './main.scss';

interface IMain {
  
}

export const Main = (props: IMain) => {

  

 

  return (
    <>
    <div className='main-container'>
      <NewPosts />
      <PostSort />
      <Posts />
    </div>
    </>
  );
};
