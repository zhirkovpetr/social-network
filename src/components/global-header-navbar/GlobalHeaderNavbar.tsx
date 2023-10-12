import React from "react";

import {Header} from "../header/Header";
import {Navbar} from "../navbar/Navbar";
import {FriendDialogType} from "../../common/state/state";

type GlobalHeaderNavbarPropsType = {
  sidebar: FriendDialogType[]
}

export const GlobalHeaderNavbar: React.FC<GlobalHeaderNavbarPropsType> = ({sidebar}) => {
  return (
    <>
      <Header/>
      <Navbar sidebar={sidebar}/>
    </>
  )
}
