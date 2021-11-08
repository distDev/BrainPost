
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { NewPosts } from '../../Components/newPosts/NewPost';
import { Posts } from '../../Components/posts/Posts';
import { PostSort } from '../../Components/postSort/PostSort';
import { IPost } from '../../interfaces';

import './main.scss';

interface IMain {
  children: React.ReactNode;
}

export const Main: FC<IMain> = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await axios.get('/posts');
        setPosts(res.data);
      };
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className='main-container'>
        <NewPosts />
        <PostSort />
        <Posts posts={posts} />
      </div>
    </>
  );
};
