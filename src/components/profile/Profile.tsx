import React from "react";

import './Profile.css';

export const Profile = () => {
  return (
    <div className={'profile'}>
      <img src={'https://img51994.poehali.tv/img/2018-11-26/fmt_114_24_tnr4tqx8lcg.jpg'} alt={'picture content'}/>
      <div className={'contentProfile'}>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpeZY1nC4gK2CwE8nOHtg-73KR2xdkvoeqbUHv4JpLk1ogVeaUOrDQIwqGII3RrTyNRA&usqp=CAU'} alt={'image profile'}/>
        <div className={'blockAboutMe'}>
          <h5>first name, last name</h5>
          <div>Date of Birth</div>
          <div>City</div>
          <div>Education</div>
          <div>Web Site</div>
        </div>
      </div>
      <div className={'contentPosts'}>
        <h5>My posts</h5>
        <div className={'newPosts'}>
          <input placeholder={'твои новости ...'}/>
          <button>Отправить</button>
        </div>
        <div className={'myPosts'}>
          <div>Post1</div>
          <div>Post2</div>
          <div>Post3</div>
        </div>
      </div>
    </div>
  )
}