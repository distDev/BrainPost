import { ReactChild, ReactChildren, ReactNode } from "react";

export interface IPost {
  _id: string;
  username: string;
  body: {
    blocks: {
      data: {
        text: string;
      };
    }[];
    version: string;
  }[];
  categories: string;
  createdAt: string;
  children: React.ReactNode;
}
export interface ICategories {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IChild {
  children: ReactChild | ReactChildren;
}

export interface IFormType {
  setFormType: React.Dispatch<React.SetStateAction<'register' | 'auth'>>;
}

export interface IUser  {
    _id: string,
    username: string,
    email: string,
    profilePic: string,
}
