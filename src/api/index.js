import axios from 'axios'
const PATH = 'https://social-network.samuraijs.com/api/1.0/'

const instanceGet = axios.create({
  baseURL: PATH
});

const instance = axios.create({
  baseURL: PATH,
  withCredentials: true,
  headers: {
    'API-KEY': '2770717b-7856-4262-9cce-04c5522365f3'
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instanceGet.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  async getUsersProfile(userId = 2) {
    const response = await instanceGet.get(`profile/${userId}`);
    return response.data;
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)
  }
}
