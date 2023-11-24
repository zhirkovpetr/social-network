import axios from 'axios';

import {
  TResponseFollow,
  TResponseGetAuth,
  TResponseGetUser,
  TResponseGetUsers,
} from '../interfaces/Interface';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e6ae6895-5543-42ee-855f-a472a7c08a69',
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pagesNumber: number) {
    return instance.get<TResponseGetUsers>(
      `users?page=${currentPage}&count=${pagesNumber}`,
      { withCredentials: true },
    );
  },
  follow(id: number) {
    return instance.post<TResponseFollow>(
      `/follow/${id}`,
      {},
      {
        withCredentials: true,
        headers: { 'API-KEY': 'e6ae6895-5543-42ee-855f-a472a7c08a69' },
      },
    );
  },
  unFollow(id: number) {
    return instance.delete<TResponseFollow>(`/follow/${id}`, {
      withCredentials: true,
      headers: { 'API-KEY': 'e6ae6895-5543-42ee-855f-a472a7c08a69' },
    });
  },
};

export const profileAPI = {
  getUser(userId: string) {
    return instance.get<TResponseGetUser>(`profile/${userId}`, { withCredentials: true });
  },
};

export const authAPI = {
  me() {
    return instance.get<TResponseGetAuth>(`auth/me`, { withCredentials: true });
  },
};
