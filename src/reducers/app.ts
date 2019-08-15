
export type AppState = {
  login: boolean;
  menus: [];
  menuOpenKeys: string[];
  menuSelectedKeys: string[];
}

export default router => {
  const pathname = router.location.pathname;
  const initState: AppState = {
    login: false,
    menus: [],
    menuOpenKeys: [],
    menuSelectedKeys: [pathname]
  };

  return (state = initState, { payload, type }) => {
    switch (type) {
      case 'APP_LOGIN':
        return {
          ...state,
          login: payload.login
        };

      case 'APP_UPDATESTATE':
        return {
          ...state,
          ...payload
        }

      default:
        return state;
    }
  }
}