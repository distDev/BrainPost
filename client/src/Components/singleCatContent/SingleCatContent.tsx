import React, { FC } from 'react'
import { IPost } from '../../interfaces';

interface ISingleCatContent {
  catContent: IPost;
}

export const SingleCatContent: FC<ISingleCatContent> = ({ catContent }) => {

console.log(catContent);
  return (
    <>
    </>
  );
};
