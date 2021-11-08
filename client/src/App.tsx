import React from 'react';
import { Layout } from './Components/layout/Layout';

import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { AppRouter } from './Components/AppRouter';

interface Props {}

export const App = (props: Props) => {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
};
