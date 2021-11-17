import React, { useContext, useEffect, useRef, useState } from 'react';
import { createReactEditorJS } from 'react-editor-js';
import './article-editor.scss';
import { Context } from '../../Context/Context';
import axios from 'axios';
import { EDITOR_JS_TOOLS } from './tools.js';
import  illus  from '../../images/illus.png'
import { useHistory } from 'react-router';




export const ArticleRedactor = () => {
  const [cat, setCat] = useState([]);
  const [selected, setSelected] = useState('');
  const [complite, setComplite] = useState(false);

  const { user } = useContext(Context);
  const history = useHistory();

  const editorJS = React.useRef(null);

  const handleInitialize = React.useCallback((instance) => {
    editorJS.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorJS.current.save();
    try {
      const res = await axios.post('/posts', {
        username: user.username,
        body: savedData,
        categories: selected,
      });
      setComplite(true)
    } catch (error) {}
  }, [selected, user.username]);

  const ReactEditorJS = createReactEditorJS();

  useEffect(() => {
    const fetchCat = async () => {
      const res = await axios.get('/categories/');
      setCat(res.data);
    };
    fetchCat();
  }, []);

  const handleChangeSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleBack = () => {
    history.push('/');
  }

  return (
    <div className='main-container editor-container'>
      {complite ? (
        <div className='ed-complite'>
          <img src={illus} alt={illus} />
          <h2>Поздравляем! ваша статья была опубликована</h2>
          <button onClick={handleBack}>На главную</button>
        </div>
      ) : (
        <>
          <div>
            <select
              name='select'
              id=''
              value={selected}
              onChange={handleChangeSelect}
            >
              {cat.map((e) => (
                <option value={e.name}>{e.name}</option>
              ))}
            </select>
          </div>
          <ReactEditorJS
            onInitialize={handleInitialize}
            defaultValue={editorJS}
            tools={EDITOR_JS_TOOLS}
          />
          <button onClick={handleSave}>Сохранить</button>
        </>
      )}
    </div>
  );
};
