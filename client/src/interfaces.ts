

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



export interface IFormType {
  setFormType: React.Dispatch<React.SetStateAction<'register' | 'auth'>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUser  {
    _id: string,
    username: string,
    email: string,
    profilePic: string,
}
