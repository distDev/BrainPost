import React, { useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import SimpleImage from '@editorjs/simple-image';
import Quote from '@editorjs/quote';
import './article-editor.scss';

export const ArticleRedactor = () => {
  const [post, setPost] = useState();

  const editor = new EditorJS({
    /**
     * Id of Element that should contain the Editor
     */
    holder: 'editorjs',

    /**
     * Available Tools list.
     * Pass Tool's class or Settings object for each Tool you want to use
     */
    tools: {
      header: Header,
      image: SimpleImage,
      quote: Quote,
    },

    placeholder: 'Напишите что-нибудь',
  });

  const handleSave = () => {
    editor
      .save()
      .then((outputData) => {
        console.log( outputData);
        
      })
      
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  }
  console.log(post)

  return (
    <div className='main-container editor-container'>
      <div id='editorjs'></div>
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
};
