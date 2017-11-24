import authConfig from '../helpers/axiosConfig';

function register(user) {
  return authConfig
    .request({
      url: '/auth/register',
      method: 'POST',
      data: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    })
    .then(response => response.data);
}

function login(email, password) {
  return authConfig
    .request({
      url: '/auth/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    })
    .then((response) => {
      if (response.data.status === 'Logged in!') {
        localStorage.setItem('authorization', response.data.token);
      } else {
        return Promise.reject(response.statusText);
      }
      return response.data;
    });
}

function getUser() {
  return authConfig
    .request({
      url: '/user',
      method: 'GET',
    })
    .then(response => response.data)
}

const authService = {
  register,
  login,
  getUser,
};

export default authService;
