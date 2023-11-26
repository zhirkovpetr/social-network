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
    return instance
      .get<TResponseGetUsers>(`users?page=${currentPage}&count=${pagesNumber}`)
      .then(res => res.data);
  },
  follow(id: number) {
    return instance.post<TResponseFollow>(`follow/${id}`).then(res => res.data);
  },
  unFollow(id: number) {
    return instance.delete<TResponseFollow>(`follow/${id}`).then(res => res.data);
  },
};

export const profileAPI = {
  getUser(userId: string) {
    return instance.get<TResponseGetUser>(`profile/${userId}`);
  },
};

export const authAPI = {
  me() {
    return instance.get<TResponseGetAuth>(`auth/me`).then(res => res.data);
  },
};
