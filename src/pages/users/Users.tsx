import React, { useEffect } from 'react';

import { usersAPI } from '../../api/user-api';
import { Pagination } from '../../common/pagination/Pagination';
import { User } from '../../components/user/User';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { setTotalCount, setUsers } from '../../redux/users-slice';

export const Users: React.FC = () => {
  const { users, pagesNumber, currentPage } = useAppSelector(state => state.usersSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (users.items.length === 0) {
      const fetchData = async (): Promise<void> => {
        try {
          const res = await usersAPI.getUsers(currentPage, pagesNumber);
          dispatch(setUsers(res.data.items));
          dispatch(setTotalCount(res.data.totalCount));
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
      <Pagination />
      {users.items.map(u => (
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
