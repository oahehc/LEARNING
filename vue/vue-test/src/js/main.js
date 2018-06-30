/* eslint-disable no-new, no-console */
import VueMdl from 'vue-mdl';
import Vue from 'vue';
import _ from 'lodash';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import 'font-awesome/css/font-awesome.min.css';
import '../index.html';
import '../style/main.scss';
import '../../node_modules/material-design-lite/material.min.css';
import '../../node_modules/material-design-lite/material.min.js';

/* PRODUCTION ONLY
Vue.config.silent = true;
Vue.config.devtools = false; // 關閉vue-devtools
Vue.config.debug = false; // 關閉錯誤警告
*/
Vue.use(VueMdl);
Vue.use(BootstrapVue);
// import Icon from 'vue-awesome/components/Icon.vue';
// Vue.component('icon', Icon);
// import App from '../component/App.vue';
// new Vue({
//     el: '#app',
//     render: h => h(App),
// });

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>',
    methods: {
        emitData() {
            this.$emit('emit-data', 100);
        },
    },
});
Vue.component('record-element', {
    template: '<div :disabled="recordHasChanged"><span>{{ record.author }}</span><button @click="changeAuthor(\'Raf\')">change author</button></div>',
    props: ['record'],
    data() {
        return {
            recordHasChanged: false,
        };
    },
    methods: {
        changeAuthor(username) {
            /* 把該筆記錄變成Raf的，並存回後端 */
            this.recordHasChanged = true;
            // this.$set('recordHasChanged', true);
            this.$emit('after-update', this.record.author, username);
        },
    },
});
const data = {
    show: true,
    value: 5,
    text: 'aaa',
    checked: false,
    apiResult: 'api result',
    list: [{
        author: 'Allen',
    }, {
        author: 'Andrew',
    }],
    sampleClass: {
        account: 'account',
        password: 'password',
    },
    name: 'data',
    message: 'Hello World!',
    score: 0,
    linkUrl: 'heroku.oahehc.com',
    linkTitle: 'Oahehc',
    somthingElse: 'test',
    selectOptions: '2',
    todos: [{
        text: '学习 JavaScript',
    }, {
        text: '学习 Vue',
    }, {
        text: '整个牛项目',
    }],
    employees: [{
        name: 'Oahehc',
        email: 'oahehc@gmail.com',
    }, {
        name: 'AndrewC',
        email: 'andrew.chang@flow.tw',
    }],
    show: true,
};
const VM = new Vue({
    el: '#app',
    data,
    methods: {
        updateList(originalAuthor, newAuthor) {
            console.log('updateList', originalAuthor, newAuthor);
            this.list.forEach((obj) => {
                if (obj.author === originalAuthor) obj.author = newAuthor;
            });
        },
        handleClick() {
            this.score = parseInt(this.score, 10) + 1;
        },
        deleteEmployee(index) {
            console.log(index);
            this.employees.splice(index, 1);
        },
        sendApi() {
            axios.get('http://10.5.11.189/')
                .then((response) => {
                    console.log('api success', response);
                    this.apiResult = response.body;
                })
                .catch((error) => {
                    console.error('api fail', error);
                });
        },
    },
    created() {
        console.log('Vue init');
    },
    updated() {
        console.log('Vue update');
    },
    computed: {
        feedback() {
            return this.name.length ? '' : 'Please enter something';
        },
        state() {
            return this.name.length ? 'success' : 'warning';
        },
    },
});
console.log(VM);
// if (module.hot) { // Use HMR (Hot Module Replacement)
//     module.hot.accept();
// }
