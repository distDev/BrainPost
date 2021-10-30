import React from 'react';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { RecomedCat } from './RecomedCat/RecomedCat';

interface Props {}

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className='main'>
        <Navbar />
        {children}
        <RecomedCat />
      </div>
    </>
  );
};
