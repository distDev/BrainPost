import React from 'react';
import { useParams } from 'react-router';
import { Post } from '../../Components/post/Post';
import { data } from '../../data';
import './profile.scss';

interface Props {}

export const Profile = (props: Props) => {
  const { author }: any = useParams();

  return (
    <div className='main-container'>
      <div className='profile-info'>
        <div className='profile-info-img'>
          <img
            src='https://cdnn21.img.ria.ru/images/149835/48/1498354822_0:66:3000:1754_600x0_80_0_0_311e2d3a799cc2749586cffca988d39e.jpg'
            alt=''
          />
        </div>
        <h3>Дмитрий</h3>
      </div>
      {data.posts.map((post) => (
          <>
            <div className='post-container'>
              <Post post={post} />
            </div>
          </>
        ))}
    </div>
  );
};
