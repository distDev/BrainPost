import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IContx } from '../../Components/forms/authForm/AuthForm';
import { Posts } from '../../Components/posts/Posts';
import { Context } from '../../Context/Context';
import { IPost, IUser } from '../../interfaces';
import './profile.scss';

interface Props {}

export const Profile = (props: Props) => {
  const { id }: any = useParams();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [userInfo, setUserInfo] = useState<IUser>();

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await axios.get(`/users/${id}`);
        setUserInfo(res.data);
      };
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  }, [id]);


  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await axios.get(`/posts?user=${userInfo?.username}`);
        setPosts(res.data);
      };
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  }, [userInfo?.username]);

  

  return (
    <div className='main-container'>
      <div className='profile-info'>
        <div className='profile-info-img'>
          <img
            src={
              userInfo?.profilePic ||
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/2560px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'
            }
            alt=''
          />
        </div>

        <div className='profile-info-text'>
          <h3>{userInfo?.username}</h3>
          <p>{userInfo?.email}</p>
        </div>
      </div>
      <Posts posts={posts} />
    </div>
  );
};
