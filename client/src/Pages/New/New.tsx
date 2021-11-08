import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Posts } from '../../Components/posts/Posts';
import { PostSort } from '../../Components/postSort/PostSort';
import { IPost } from '../../interfaces';

interface Props {}

export const New = (props: Props) => {
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
    <div className='main-container'>
      <PostSort />
      <Posts posts={posts} />
    </div>
  );
};
