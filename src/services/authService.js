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

const authService = {
  register,
};

export default authService;
