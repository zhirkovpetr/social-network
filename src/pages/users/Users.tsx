import React from 'react';

import { Pagination } from '../../common/pagination/Pagination';
import { Preloader } from '../../common/preloader/Preleadeer';
import { User } from '../../components/user/User';
import { useAppSelector } from '../../hooks/ReduxHooks';
import { TItemType } from '../../interfaces/Interface';

export const Users: React.FC = () => {
  const { users, /* pagesNumber, currentPage, */ isFetching } = useAppSelector(
    state => state.usersSlice,
  );
  // const dispatch = useAppDispatch();

  /* useEffect(() => {
    if (users.items.length === 0) {
      dispatch(toggleIsFetching(true));
      const fetchData = async (): Promise<void> => {
        try {
          const res = await usersAPI.getUsers(currentPage, pagesNumber);
          dispatch(setUsers(res.data.items));
          dispatch(setTotalCount(res.data.totalCount));
          dispatch(toggleIsFetching(false));
        } catch (error) {
          console.error(`Error: ${error}`);
        }
      };
      fetchData().catch(error => {
        console.error(`Error in fetchData: ${error}`);
      });
    }
  }, []); */

  return (
    <>
      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          <Pagination />
          {users.items.map((u: TItemType) => (
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
      )}
    </>
  );
};
