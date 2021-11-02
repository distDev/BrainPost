import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IPost } from '../../interfaces';

import { Post } from '../post/Post';



export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('/posts');
      setPosts(res.data);
    };
    fetchPost();
  }, []);

 

  return (
    <div className='post-container'>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};
