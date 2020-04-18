import axios from 'axios'
const PATH = 'https://social-network.samuraijs.com/api/1.0/'

const instanceGet = axios.create({
  baseURL: PATH
});

const instance = axios.create({
  baseURL: PATH,
  withCredentials: true,
  headers: {
    'API-KEY': '981ab4ac-b16c-4610-9fb4-e41305b3c995'
  }
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await instanceGet.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  async getUsersProfile(userId = 2) {
    const response = await instanceGet.get(`profile/${userId}`);
    return response.data;
  },
  async unfollow(userId) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
  },
  async follow(userId) {
    const response = await instance.post(`follow/${userId}`);
    return response.data;
  },
  // follow(userId) {
  //   return instance.post(`follow/${userId}`)
  //     .then(response => response.data)
  // }
}
