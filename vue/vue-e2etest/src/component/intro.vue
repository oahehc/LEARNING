<template>
  <div id="intro">
    <img src="../assets/logo.png">
    <div>
        {{account}} in INTRO page
        <router-link :to="{path: '/home'}">HOME</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: 'intro',
        computed: {
            ...mapGetters(['account']),
        },
    }

</script>

<style lang="scss">

</style>
