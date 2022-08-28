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
    data() {
        return {
            recoveryList : []
        }
    },
    mounted() {
        this.$store.dispatch('getRecovery')
        this.recoveryList = this.$store.state.todoRecovery
        this.$bus.$on('updateRecovery', () => {
            let arrR = JSON.parse(window.localStorage.getItem('todoRecovery'))
            this.recoveryList.splice(0, this.recoveryList.length)
            arrR.forEach((item, index, arr) => {
                this.recoveryList[index] = item
            })
        })
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
</style>