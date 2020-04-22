import axios from 'axios'
const PATH = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
  baseURL: PATH,
  withCredentials: true,
  headers: {
    'API-KEY': '981ab4ac-b16c-4610-9fb4-e41305b3c995'
  }
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const { data } = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return data;
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object!')
    return profileAPI.getProfile(userId);
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

export const profileAPI = {
  async getProfile(userId) {
    const { data } = await instance.get(`profile/${userId}`);
    return data;
  },
  async getStatus(userId) {
    const { data } = await instance.get(`profile/status/${userId}`);
    return data;
  },
  async updateStatus(status) {

    const response = await instance.put(`profile/status`, { status });
    if (response.data.resultCode === 0) {
      return response;
    }
  }
}

export const authAPI = {
  async me() {
    const { data } = await instance.get(`auth/me`);
    return data;
  },
  async login(email, password, rememberMe, captcha) {
    const { data } = await instance.post(`auth/login`, { email, password, rememberMe, captcha }); //captcha
    return data;
  },
  async logout() {
    const { data } = await instance.delete(`auth/login`);
    return data;
  },
}
