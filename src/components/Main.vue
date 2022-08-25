<template>
    <div class="Main">
        <div class="card waiting-item">
            <div class="card-header">待办</div>
            <div class="card-add">
                <main-info></main-info></div>
        </div>
        <div class="card doing">
            <div class="card-header">进行中</div>
            <div class="card-add"><main-info></main-info></div>
        </div>
        <div class="card finish">
            <div class="card-header">已完成</div>
            <div class="card-add"><main-info></main-info></div>
        </div>
    </div>
</template>

<script>
import Info from '../Contain/coms/Info.vue'

export default {
    name: 'Main',
    components : {
        MainInfo : Info
    },
        methods : {
        additem(){
            
        }
    }
}
</script>

<style scoped>
.Main {
    width: 1020px;
    margin : 0 auto;
}
.card {

    float: left;
    width: 320px;
    margin-right: 20px;
    color: aqua;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    line-height: 40px;
}

.card:nth-child(3) {
    margin-right: 0;
}

.card-header {
    height: 40px;
    background-color: rgb(54, 59, 64);
}

.card-add {
    background-color: rgb(234, 235, 240);
}
</style>