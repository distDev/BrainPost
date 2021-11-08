
import { FC} from 'react'
import { IPost } from '../../interfaces';
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
