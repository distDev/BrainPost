import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { ICategories } from '../../../interfaces';
import './recomend-cat.scss';

interface Props {}

export const RecomedCat = (props: Props) => {

  const history = useHistory()

  const handleAddPost = () => {
    history.push('/acrticle-editor');
  }
   const [cat, setCat] = useState<ICategories[]>([]);

   useEffect(() => {
     const fetchCat = async () => {
       const res = await axios.get('/categories/');
       setCat(res.data);
     };
     fetchCat();
   }, []);
  return (
    <div className='recomend-cat-stic'>
      <div className='recomend-cat'>
        <div className='recomed-box'>
          <h4>Рекомендации</h4>
          <div className='recomed-links'>
            {cat.map((e) => (
              <Link to={`/single-cat/${e.name}`}>{e.name}</Link>
            ))}
          </div>
        </div>
        <button onClick={handleAddPost}>Добавить пост</button>
      </div>
    </div>
  );
};
