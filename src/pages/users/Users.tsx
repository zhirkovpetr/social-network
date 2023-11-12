import React, { useEffect } from 'react';

import { usersAPI } from '../../api/user-api';
import { User } from '../../components/user/User';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { setUsers } from '../../redux/users-slice';

export const Users: React.FC = () => {
  const { items } = useAppSelector(state => state.usersSlice.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (items.length === 0) {
      const fetchData = async (): Promise<void> => {
        try {
          const res = await usersAPI.getUsers();
          dispatch(setUsers(res.data.items));
        } catch (error) {
          console.error(`Error: ${error}`);
        }
      };
      fetchData().catch(error => {
        console.error(`Error in fetchData: ${error}`);
      });
    }
  }, []);

  return (
    <div>
      {items.map(u => (
        <User
          key={u.id}
          name={u.name}
          id={u.id}
          photos={u.photos}
          followed={u.followed}
          status={u.status}
        />
      ))}
    </div>
  );
};
