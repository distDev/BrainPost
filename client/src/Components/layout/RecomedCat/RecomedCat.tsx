import React from 'react';
import { useHistory } from 'react-router';
import './recomend-cat.scss';

interface Props {}

export const RecomedCat = (props: Props) => {

  const history = useHistory()

  const handleAddPost = () => {
    history.push('/acrticle-editor');
  }
  
  return (
    <div className='recomend-cat-stic'>
      <div className='recomend-cat'>
        <div className='recomed-box'></div>
        <button onClick={handleAddPost}>Добавить пост</button>
      </div>
    </div>
  );
};
