const config = {
  sidebarStatus: false,
  sidebarData: [],
  userInfo: {},
};

export const initialState = {
  config,
};

export const mutations = {
  hideSidebar() {
    initialState.config.sidebarStatus = false;
  },
  toggleSidebar() {
    initialState.config.sidebarStatus = !initialState.config.sidebarStatus;
  },
  setSidebarData(state, data) {
    initialState.config.sidebarStatus = true;
    initialState.config.sidebarData = data;
  },
};
