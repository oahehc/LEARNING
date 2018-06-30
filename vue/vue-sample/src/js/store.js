/* eslint-disable no-shadow, no-console */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    isLogin: false,
    account: '',
    list: [{
        a: 'a',
    }, {
        b: 'b',
    }],
};
const getters = {
    isLogin: state => state.isLogin,
    account: state => state.account,
    list: state => state.list,
};
const mutations = {
    isLogin(state, value) {
        state.isLogin = value;
    },
    account(state, value) {
        state.account = value;
    },
    list(state, value) {
        state.list = value;
    },
};
const actions = {
    apiList({
        commit,
    }) {
        // const URL = 'http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery';
        // const URL = 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=36847f3f-deff-4183-a5bb-800737591de5';
        const URL = 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b';
        fetch(URL)
            .then((response) => {
                console.log('RETURN', response);
                if (response.ok) {
                    return response.json(); // adjust to json format
                } else {
                    throw Error();
                }
            })
            .then((data) => {
                commit('list', data); // update data to list
            })
            .catch(err => console.log('ERR', err));
    },
    actionLogin({
        commit,
    }, {
        account,
        password,
    }) {
        return new Promise((resolve) => {
            console.log('start login', account, password);
            setTimeout(() => {
                if (account === password) {
                    commit('account', account);
                    commit('isLogin', true);
                    resolve(account);
                } else {
                    resolve('');
                    throw new Error('login fail');
                }
            }, 1000);
        });
    },
};
const myPlugin = (store) => { // Plugins https://vuex.vuejs.org/en/plugins.html
    // called when the store is initialized
    store.subscribe((mutation, state) => {
        // called after every mutation. The mutation comes in the format of { type, payload }.
        console.log(mutation);
    });
};

export default new Vuex.Store({
    plugins: [myPlugin],
    state,
    getters,
    mutations,
    actions,
    strict: true,
});
