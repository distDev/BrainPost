import React from 'react';
import { Layout } from './Components/layout/Layout';
import { AppRouter } from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

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
