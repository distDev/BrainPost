import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Loader } from '../../Components/loader/Loader';
import { Post } from '../../Components/post/Post';
import { IPost } from '../../interfaces';

export const SingleCat = () => {
  const [catContent, setCatContent] = useState<IPost[]>([]);
  const { name }: any = useParams();

  useEffect(() => {
    const fetchCat = async () => {
      const res = await axios.get('/posts/');
      setCatContent(res.data);
    };
    fetchCat();
  }, []);

  console.log(catContent);

  return (
    <>
      <div className='main-container'>
        {catContent.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className='profile-info'>
              <div className='profile-info-img'>
                <h3>{name}</h3>
              </div>
            </div>
            {catContent
              .filter((e) => e.categories === name)
              .map((e) => (
                <Post post={e} />
              ))}
          </>
        )}
      </div>
    </>
  );
};
