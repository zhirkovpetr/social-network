import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { usersAPI } from '../../api/user-api';
import { Preloader } from '../../common/preloader/Preleadeer';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { setUser } from '../../redux/profile-slice';
import { Ava } from '../ava/Ava';
import { Description } from '../description/Description';

import s from './Content.module.css';

export const Content: React.FC = () => {
  const { profile } = useAppSelector(state => state.profileSlice);
  const dispatch = useAppDispatch();
  const params = useParams<'id'>();
  let userId = params.id as string;

  if (userId === undefined) {
    userId = '2';
  }

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await usersAPI.getUser(userId);
        console.log(res.data);
        dispatch(setUser(res.data));
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData().catch(error => {
      console.error(`Error in fetchData: ${error}`);
    });
  }, []);

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={s.contentProfile}>
      <Ava photos={profile.photos.small} />
      <Description profile={profile} />
    </div>
  );
};
