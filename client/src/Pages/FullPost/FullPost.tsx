import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './fullpost.scss';
import axios from 'axios';
import FullPostContent from '../../Components/fullPostContent/FullPostContent';
import { IPost } from '../../interfaces';
import { Loader } from '../../Components/loader/Loader';




export const FullPost = () => {
  const [fullPost, setFullPost] = useState<IPost>();
  const { id }: any = useParams();

  useEffect(() => {
    const fetchFullPost = async () => {
      const res = await axios.get('/posts/' + id);
      setFullPost(res.data);
    };
    fetchFullPost();
  }, [id]);


  return (
    <>
      {fullPost === undefined ? (
        <Loader />
      ) : (
        <FullPostContent fullPost={fullPost} id={id} />
      )}
    </>
  );
};
