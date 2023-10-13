import React from 'react';

import { Ava } from '../ava/Ava';
import { Description } from '../description/Description';

import s from './Content.module.css';

export const Content: React.FC = () => (
  <div className={s.contentProfile}>
    <Ava />
    <Description />
  </div>
);
