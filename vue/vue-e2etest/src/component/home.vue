<template>
  <div id="home">
    <img src="../assets/logo.png">
    <div class="nav">
        <router-link :to="{path: '/intro'}">INTRO</router-link>
        <router-link :to="{path: '/about'}">ABOUT</router-link>
    </div>
    <div>
        <input type="text" placeholder="account" v-model="account">
        <input type="password" placeholder="password" v-model="password">
        <input type="button" value="SUBMIT" @click="handleLogin">
    </div>
    <!-- send list content to datarow base on props: obj -->
    <datarow v-for="obj in list" :obj="obj"></datarow>
  </div>
</template>

<script>
import router from '../js/router';
import datarow from '../component/datarow.vue';
import { mapActions,mapGetters } from 'vuex';
    export default {
        name: 'home',
        data() { // account,password input
            return {
                account: null,
                password: null,
            }
        },
        created () {
            this.apiList();
            // this.$store.dispatch('apiList');
        },
        methods: {
            ...mapActions([ // load actionLogin from store
                'actionLogin','apiList',
            ]),
            async handleLogin(){ // exacute actionLogin, and redirect if login success
                const account = this.account;
                const password = this.password;
                const res = await this.actionLogin({account,password});
                if(res){
                    router.push({ path: 'intro' });
                }else{
                    alert('login fail');
                }
            },
        },
        computed: { // load list from store
            ...mapGetters(['list']),
        },
        components: { 
            datarow,
        },
    }

</script>

<style lang="scss">
    input{
        font-size: 1.2rem;
    }
    .nav{
        position: absolute;
        top: 0;
        right: 10px;
    }
</style>
