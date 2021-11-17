import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPost, IUser } from '../../interfaces';
import './Post.scss';
import moment from 'moment';



interface IPosts {
  post: IPost;
  
}

export const Post: FC<IPosts> = ({ post}) => {
  const body = post.body.map((e) => e.blocks)[0];
 const [userInfo, setUserInfo] = useState<IUser[]>([]);

 useEffect(() => {
   try {
     const fetchPost = async () => {
       const res = await axios.get('/users/');
       setUserInfo(res.data);
     };
     fetchPost();
   } catch (error) {
     console.log(error);
   }
 }, []);

 console.log(userInfo);
 const userFilter = userInfo.filter((e) => post.username === e.username);
  return (
    <div className='post' key={post._id} id={post._id}>
      <div className='post-header'>
        <div className='post-header-desc'>
          <Link to={`/${post.categories}`} className='cat'>
            <p>{post.categories}</p>
          </Link>
          {/* <Link to={`/profile/${post._id}`} className='author'>
            {post.username}
          </Link> */}
          {userFilter.map((e) => (
            <Link to={`/profile/${e._id}`} className='author'>
              {e.username}
            </Link>
          ))}
          <p>{moment(post.createdAt).fromNow()}</p>
        </div>

        <div className='post-content-mini'>
          <Link className='post-title' to={`/post/${post._id}`}>
            {body.slice(0, 1).map((e) => (
              <h3>{e.data.text}</h3>
            ))}
          </Link>

          {body.slice(1, 2).map((e) => (
            <p>{e.data.text.slice(0, 150)}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
