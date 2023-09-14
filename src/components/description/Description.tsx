import React from "react";

import s from './Description.module.css';

export const Description: React.FC = () => {
  return (
    <div className={'blockAboutMe'}>
      <h5>first name, last name</h5>
      <div>Date of Birth</div>
      <div>City</div>
      <div>Education</div>
      <div>Web Site</div>
    </div>
  )
}
