import React from 'react';

import { FriendDialogType } from '../../common/state/state';
import { Header } from '../header/Header';
import { Navbar } from '../navbar/Navbar';

type GlobalHeaderNavbarPropsType = {
  sidebar: FriendDialogType[];
};

export const GlobalHeaderNavbar: React.FC<GlobalHeaderNavbarPropsType> = ({
  sidebar,
}) => (
  <>
    <Header />
    <Navbar sidebar={sidebar} />
  </>
);
