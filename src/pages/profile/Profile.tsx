import React from "react";

import {MyPosts} from "../../components/my-posts/MyPosts";
import {Content} from "../../components/content/Content";

import s from './Profile.module.css';

export const Profile: React.FC = () => {
  return (
    <div className={s.profile}>
      <img className={s.backgroundPicture} src={'https://img51994.poehali.tv/img/2018-11-26/fmt_114_24_tnr4tqx8lcg.jpg'} alt={'content'}/>
      <Content />
      <MyPosts/>
    </div>
  )
}
