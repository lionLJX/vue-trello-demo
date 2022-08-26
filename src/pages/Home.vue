<template>
    <div id="Home" >

        <home-header></home-header>
        <home-main></home-main>
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
    }
}

</script>

<style>
body {
    background-color: #0078c0;
}
</style>