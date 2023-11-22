import React from 'react';

import { usersAPI } from '../../api/user-api';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { setCurrentPage, setUsers, toggleIsFetching } from '../../redux/users-slice';

import s from './Pagination.module.css';

export const Pagination: React.FC = () => {
  const { users, pagesNumber, currentPage } = useAppSelector(state => state.usersSlice);
  const dispatch = useAppDispatch();

  const onClickCurrentPage = (page: number): void => {
    dispatch(setCurrentPage({ page }));
    dispatch(toggleIsFetching(true));
    const fetchData = async (): Promise<void> => {
      try {
        const res = await usersAPI.getUsers(page, pagesNumber);
        dispatch(setUsers(res.data.items));
        dispatch(toggleIsFetching(false));
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData().catch(error => {
      console.error(`Error in fetchData: ${error}`);
    });
  };

  const pagesCount = Math.ceil(users.totalCount / pagesNumber);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages[i - 1] = i;
  }

  return (
    <div className={s.pages}>
      {pages.map(p => (
        <span
          key={p}
          role="button"
          tabIndex={0}
          onClick={() => onClickCurrentPage(p)}
          onKeyDown={() => onClickCurrentPage(p)}
          className={currentPage === p ? `${s.active} ${s.numberPage}` : s.numberPage}
        >
          {p}
        </span>
      ))}
    </div>
  );
};
