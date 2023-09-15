import React from "react";

import {Button} from "../../common/button/Button";

import s from './CreatePost.module.css';

export const CreatePost: React.FC = () => {
  return (
    <div className={'newPosts'}>
      <div><textarea placeholder={'твои новости ...'}/></div>
      <div><Button title={'Отправить'}/></div>
    </div>
  )
}
