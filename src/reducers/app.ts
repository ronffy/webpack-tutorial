
const initState = {
  login: false,
}

export default (state = initState, { payload, type }) => {
  switch (type) {
    case 'APP_LOGIN':
      return {
        ...state,
        login: payload.login
      };
  
    default:
      return state;
  }
}