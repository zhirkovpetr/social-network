import axios from 'axios';

import { TResponseGetUsers } from '../interfaces/Interface';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e6ae6895-5543-42ee-855f-a472a7c08a69',
  },
});

export const usersAPI = {
  getUsers() {
    return instance.get<TResponseGetUsers>(`users`);
  },
};
