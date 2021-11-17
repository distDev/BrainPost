
import axios from 'axios';
import { FC, useEffect, useState} from 'react'
import { IPost, IUser } from '../../interfaces';
import { Post } from '../post/Post';

interface PostsProps {
  posts: IPost[];
  
}

export const Posts: FC<PostsProps> = ({ posts }) => {
  

  return (
    <div className='post-container'>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};
