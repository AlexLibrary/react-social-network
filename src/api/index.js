import axios from 'axios'
const PATH = 'https://social-network.samuraijs.com/api/1.0/'

const instanceGet = axios.create({
  baseURL: PATH,
  withCredentials: true
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
    const { data } = await instanceGet.get(`users?page=${currentPage}&count=${pageSize}`);
    return data;
  },
  async getProfile(userId = 2) {
    const { data } = await instanceGet.get(`profile/${userId}`);
    return data;
  },
  async unfollow(userId) {
    const { data } = await instance.delete(`follow/${userId}`);
    return data;
  },
  async follow(userId) {
    const { data } = await instance.post(`follow/${userId}`);
    return data;
  },
  // follow(userId) {
  //   return instance.post(`follow/${userId}`)
  //     .then(response => response.data)
  // }
}

export const authAPI = {
  async me() {
    const { data } = await instanceGet.get(`auth/me`);
    return data;
  },
}
