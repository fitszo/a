export const setToken = (token, role) => {
  localStorage.setItem(`${role}_token`, token);
};

export const getToken = (role) => {
  return localStorage.getItem(`${role}_token`);
};

export const removeToken = (role) => {
  localStorage.removeItem(`${role}_token`);
};

export const isAuthenticated = (role) => !!getToken(role);
