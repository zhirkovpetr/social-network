import React, { useEffect } from 'react';

import { v1 } from 'uuid';

import { User } from '../../components/user/User';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { setUsers } from '../../redux/users-slice';

export const Users: React.FC = () => {
  const newUsers = [
    {
      id: v1(),
      firstName: 'Алена',
      lastName: 'Жиркова',
      followed: true,
      status: 'я люблю путеществовать!',
      location: { city: 'Минск', country: 'Беларусь' },
    },
    {
      id: v1(),
      firstName: 'Наталья',
      lastName: 'Жиркова',
      followed: true,
      status: 'я ищу работу!',
      location: { city: 'Санкт-Петербург', country: 'Россия' },
    },
    {
      id: v1(),
      firstName: 'Алена',
      lastName: 'Жиркова',
      followed: true,
      status: 'Всем привет!',
      location: { city: 'Микашевичи', country: 'Беларусь' },
    },
    {
      id: v1(),
      firstName: 'Владимир',
      lastName: 'Жирков',
      followed: true,
      status: 'Всем привет!',
      location: { city: 'Микашевичи', country: 'Беларусь' },
    },
    {
      id: v1(),
      firstName: 'Андрей',
      lastName: 'Пашкевич',
      followed: true,
      status: 'я люблю спорт!',
      location: { city: 'Минск', country: 'Беларусь' },
    },
    {
      id: v1(),
      firstName: 'Андрей',
      lastName: 'Якуш',
      followed: true,
      status: 'я люблю пассат!',
      location: { city: 'Лунинец', country: 'Беларусь' },
    },
    {
      id: v1(),
      firstName: 'Миша',
      lastName: 'Дубейко',
      followed: true,
      status: 'я строю дом!',
      location: { city: 'Микашевичи', country: 'Беларусь' },
    },
    {
      id: v1(),
      firstName: 'Дмитрий',
      lastName: 'Прокопович',
      followed: true,
      status: 'я люблю пиво!',
      location: { city: 'Минск', country: 'Беларусь' },
    },
  ];

  const { users } = useAppSelector(state => state.usersSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(setUsers({ newUsers }));
    }
  }, []);

  return (
    <div>
      {users.map(u => (
        <User
          key={u.id}
          lastName={u.lastName}
          firstName={u.firstName}
          id={u.id}
          location={u.location}
          followed={u.followed}
          status={u.status}
        />
      ))}
    </div>
  );
};
