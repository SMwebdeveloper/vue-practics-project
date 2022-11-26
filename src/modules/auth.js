import { setItem } from "../halpers/persistanceStorage";
import AuthService from "../service/auth";

const state = {
  isLoading: false,
  user: null,
  errors: null,
};
const mutations = {
  registerStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
  },
  registereSucces(state, payload) {
    state.isLoading = false;
    state.user = payload;
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    state.errors = payload.errors;
  },
  // login function
  loginStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
  },
  loginSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
  },
  loginFailure(state, payload) {
    state.isLoading = false;
    state.errors = payload.errors;
  },
};
const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("registerStart");
      AuthService.register(user)
        .then((response) => {
          context.commit("registerSuccess", response.data.user);
          setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error) => {
          context.commit("registerFailure", error.response.data);
          reject(error.response.data);
        });
    });
  },
  // login action
  login(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("loginStart");
      AuthService.register(user)
        .then((response) => {
          context.commit("loginSuccess", response.data.user);
          setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error) => {
          context.commit("loginFailure", error.response.data);
          reject(error.response.data);
        });
    })
  }
};
export default {
  state,
  mutations,
  actions,
};
