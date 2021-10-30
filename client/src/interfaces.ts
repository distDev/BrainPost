export interface IPost {
  id: string;
  title: string;
  author: string;
  cat: string;
  img: string;
  likes: number;
  date: string;
}
export interface IFormType {
  setFormType: React.Dispatch<React.SetStateAction<'register' | 'auth'>>;
}
