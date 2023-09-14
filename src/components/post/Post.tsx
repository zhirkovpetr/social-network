import React from "react";

import s from './Post.module.css';

type PostPropsType = {
  message: string
  likeCount: number
}

export const Post: React.FC<PostPropsType> = (props) => {
  const {message, likeCount} = props
  return (
    <div className={s.postItem}>
      <img
        className={s.avatarPostItem}
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpeZY1nC4gK2CwE8nOHtg-73KR2xdkvoeqbUHv4JpLk1ogVeaUOrDQIwqGII3RrTyNRA&usqp=CAU'}
        alt={'avatar'}/>
      {message}
      <div><span>like {likeCount}</span></div>
    </div>
  )
}
