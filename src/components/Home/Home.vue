<template>
    <div id="Home" >

        <home-header></home-header>
        <home-main></home-main>
    </div>
</template>

<script>
import Header from './coms/Header.vue'
import Main  from './coms/Contain/Main.vue'

export default {
    name: 'Home',
    components : {
        HomeHeader : Header,
        HomeMain : Main
    }
}

</script>

<style>
body {
    background-color: lightblue;
}
</style>