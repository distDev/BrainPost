export const LoginStart = (userCredentials: boolean) => ({
    type: "LOGIN_START"
})
export const LoginSuccess = (user: {}) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const LoginFail = () => ({
    type: "LOGIN_FAIL"
})
export const Logout = () => ({
  type: 'LOGOUTL',
});