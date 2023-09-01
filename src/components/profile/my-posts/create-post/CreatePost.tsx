import React from "react";

import {Button} from "../../../../common/button/Button";

import s from './CreatePost.module.css';

export const CreatePost = () => {
  return (
    <div className={'newPosts'}>
      <textarea placeholder={'твои новости ...'}/>
      <Button title={'Отправить'}/>
    </div>
  )
}
