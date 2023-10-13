import React from 'react';

import { Content } from '../content/Content';

import s from './ProfileInfo.module.css';

export const ProfileInfo: React.FC = () => (
  <>
    <img
      className={s.backgroundPicture}
      src="https://img51994.poehali.tv/img/2018-11-26/fmt_114_24_tnr4tqx8lcg.jpg"
      alt="content"
    />
    <Content />
  </>
);
