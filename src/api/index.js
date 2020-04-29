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
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object!')
    return profileAPI.getProfile(userId);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  // follow(userId) {
  //   return instance.post(`follow/${userId}`)
  //     .then(response => response.data)
  // }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData, {
      'Content-Type': 'multipart/form-data'
    });
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe, captcha) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
}
