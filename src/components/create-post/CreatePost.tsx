import React, {RefObject, useRef} from "react";

import {Button} from "../../common/button/Button";

import s from './CreatePost.module.css';

export const CreatePost: React.FC = () => {
  const newPostValue = React.createRef<HTMLTextAreaElement>();

  const addPostHandler = () => {
    /*  if (newPostValue.current) {
        addPost(newPostValue.current.value)
      }*/
  }

  return (
    <div className={'newPosts'}>
      <div><textarea ref={newPostValue} placeholder={'твои новости ...'}/></div>
      <div><Button title={'Отправить'} onClick={addPostHandler}/></div>
    </div>
  )
}
