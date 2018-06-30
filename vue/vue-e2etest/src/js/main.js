/* eslint-disable no-new, no-console */
import Vue from 'vue';
import router from './router';
import store from './store';
import '../index.html';
import '../style/main.scss';

const data = {
    show: true,
};
new Vue({
    el: '#app',
    store,
    router,
    data,
    methods: {
        deleteEmployee(index) {
            console.log(index);
        },
    },
    created() {
        console.log('Vue created');
    },
    updated() {
        console.log('Vue updated');
    },
    computed: {
        feedback() {
            return this.name.length ? '' : 'Please enter something';
        },
    },
});
