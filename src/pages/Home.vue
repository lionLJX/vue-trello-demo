<template>
    <div id="Home">

        <home-header title="回收站"></home-header>
        <home-main></home-main>
        <div class="shadow-show" v-show="shadowShow"></div>
    </div>
</template>

<script>
import HomeHeader from '../components/Header.vue'
import HomeMain  from '../components/Main.vue'

// console.log(HomeHeader)

export default {
    name: 'Home',
    components : {
        HomeHeader,
        HomeMain
    },
    data() {
        return {
            shadowShow : false
        }
    },
    mounted() {
        this.$bus.$on('shadowShow',() => {
            // if()
            this.shadowShow = !this.shadowShow
        } )
    }
}

</script>

<style>
body {
    background-image: url('#');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #0078c0;
}

#Home {
    height: 100%;
}

.shadow-show {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: fixed;
    z-index: 2;
    top: 0;
}
</style>