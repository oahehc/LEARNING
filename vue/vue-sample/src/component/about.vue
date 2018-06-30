<template>
  <div id="about">
    <img src="../assets/logo.png">
    <div>
        {{account}} in ABOUT page
        <router-link :to="{path: '/home'}">HOME</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: 'about',
        computed: {
            ...mapGetters(['account']),
        },
    }

</script>

<style lang="scss">

</style>
