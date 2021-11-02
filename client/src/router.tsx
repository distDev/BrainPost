import React from 'react';
import { Route, Switch } from 'react-router';
import { ArticleRedactor } from './Pages/ArticleRedactor/ArticleRedactor';
import { Categories } from './Pages/Categories/Categories';
import { FullPost } from './Pages/FullPost/FullPost';
import { Main } from './Pages/Main/Main';
import { New } from './Pages/New/New';
import { Profile } from './Pages/Profile/Profile';
import { SingleCat } from './Pages/SingleCat/SingleCat';

interface Props {

}

export const AppRouter = (props: Props) => {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/new'>
          <New />
        </Route>
        <Route path='/categories'>
          <Categories />
        </Route>
        <Route path='/profile/:id'>
          <Profile />
        </Route>
        <Route path='/article'>
          <ArticleRedactor />
        </Route>
        <Route path='/single-cat/:name'>
          <SingleCat />
        </Route>
        <Route path='/acrticle-editor'>
          <ArticleRedactor />
        </Route>
        <Route path='/post/:id'>
          <FullPost />
        </Route>
      </Switch>
    </>
  );
};
