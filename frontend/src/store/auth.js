import ProxyUrls from '@/constants/proxyUrls';
import Vue from 'vue';

export default {
    namespaced: true,
    state: {
      email: '',
      name: '',
      role: '',
      captainStatus: 'Active',
      isLoggedIn: false,
    },
    actions: {
        async registerUser({ state }, payload) {
          console.log("registerUser");
            if (!payload) return null;
            console.log(payload);
            try {
              const { data } = await Vue.prototype.$axios({
                method: 'post',
                url: ProxyUrls.registerUrl,
                data: payload,
              });
              console.log("registerUser2");
    
            if (data && data.httpStatus === 200) {
                return true;
            }
            return false;
            } catch (err) {
            throw new Error(err);
            }
        },
        async login({ commit }, payload) {
            if (!payload) return null;
      
            try {
              const { data } = await Vue.prototype.$axios({
                method: 'post',
                url: ProxyUrls.loginUrl,
                data: payload,
              });
      
              if (data) {
                commit('setEmail', data.email);
                commit('setName', data.firstname);
                commit('setRole', data.role);
                commit('setCaptainStatus', 'Active');
                commit('setLoggedIn', true);
              }
              return data;
            } catch (err) {
              throw new Error(err);
            }
        },
      
        async logout({ commit }) {
            try {
              const { data } = await Vue.prototype.$axios({
                method: 'get',
                url: ProxyUrls.logoutUrl,
              });
      
              if (data) {
                commit('logoutUser');
              }
            } catch (err) {
              throw new Error(err);
            }
        },
        async initiateAppSession({ commit }) {
          const res = await Vue.prototype.$axios({
            method: 'get',
            url: ProxyUrls.isLoggedIn,
          });
          if (res && res.data === true) {
            commit('setEmail', localStorage.getItem('email'));
            commit('setName', localStorage.getItem('name'));
            commit('setRole', localStorage.getItem('role'));
            commit('setCaptainStatus', localStorage.getItem('captainStatus'));
            commit('setLoggedIn', true);
          } else {
            commit('setLoggedIn', false);
          }
        },
    },
    mutations:{
        setEmail(state, email) {
            state.email = email;
            localStorage.setItem('email', email);
        },
    
        setName(state, name) {
            state.name = name;
            localStorage.setItem('name', name);
        },
    
        setRole(state, role) {
          console.log(role);
            state.role = role;
            localStorage.setItem('role', role);
        },
        setCaptainStatus(state, status) {
          state.captainStatus = status;
          localStorage.setItem('captainStatus', status);
        },
        setLoggedIn(state, val) {
          state.isLoggedIn = val;
          localStorage.setItem('isLoggedIn', val);
        },
        logoutUser(state) {
            state.name = '';
            state.email = '';
            state.role = '';
            state.captainStatus = '';
            state.isLoggedIn = false;
            localStorage.setItem('isLoggedIn', false);
            localStorage.removeItem('email');
            localStorage.removeItem('name');
            localStorage.removeItem('role');
            localStorage.removeItem('captainStatus');
        },
    },
    getters:{
        getName(state) {
            return state.name;
          },
      
        getEmail(state) {
          return state.email;
        },
        getRole(state) {
          return state.role;
        },
    
        getFirstName(state) {
          if (!state.name) return '';
          return state.name.split(' ')[0];
        },
        getIsLoggedIn(state) {
          return state.isLoggedIn;
        },
    },
};