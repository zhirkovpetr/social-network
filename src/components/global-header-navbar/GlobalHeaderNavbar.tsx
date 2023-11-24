import React from 'react';

import { Preloader } from '../../common/preloader/Preleadeer';
import { useAppSelector } from '../../hooks/ReduxHooks';
import { Header } from '../header/Header';
import { Navbar } from '../navbar/Navbar';

export const GlobalHeaderNavbar: React.FC = () => {
  const { isFetching } = useAppSelector(state => state.authSlice);

  return (
    <>
      <Header />
      {isFetching ? <Preloader /> : <Navbar />}
    </>
  );
};
