<template>
    <div id="recovery">
        <home-header title="返回"></home-header>
        <main-info title="回收站" :todoList="recoveryList" todoWhich="todoRecovery"></main-info>
    </div>
</template>

<script>
import HomeHeader from '../components/Header.vue'
import MainInfo from '../components/coms/Info.vue'

export default {
    name : 'Recovery',
        components : {
        HomeHeader,
        MainInfo
    },
}
</script>

<style>

</style>