<template>
    <div class="Main">
        <!-- <div class="card waiting-item">
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
        </div> -->
        <main-info title="待办" :todoList="todoWait" todoWhich="todoWait"></main-info>
        <main-info title="进行中" :todoList="todoDoing" todoWhich="todoDoing"></main-info>
        <main-info title="完成" :todoList="todoFinish" todoWhich="todoFinish"></main-info>
    </div>
</template>

<script>
import MainInfo from '../components/coms/Info.vue'

export default {
    name: 'Main',
    components : {
        MainInfo
    },
    data() {
        return {
            todoWait : [],
            todoDoing : [],
            todoFinish : [],
        }
    },
    mounted() {
        this.$store.dispatch('updateVal')
        this.todoWait = this.$store.state.todoWait
        this.todoDoing = this.$store.state.todoDoing
        this.todoFinish = this.$store.state.todoFinish
        // 设置更新传入的todolist值
        this.$bus.$on('updateTodoList', (todoWhich) => {
            // console.log('zhixin')
            if(todoWhich == 'todoWait') {
                var arrw = JSON.parse(window.localStorage.getItem('todoWait'))
                this.todoWait.splice(0, this.todoWait.length)
                arrw.forEach((item,index,arr) => {
                    this.todoWait[index] = item
                })
            }
            if(todoWhich == 'todoDoing'){
                var arrh = JSON.parse(window.localStorage.getItem('todoDoing'))
                this.todoDoing.splice(0, this.todoDoing.length)
                arrh.forEach((item,index,arr) => {
                    this.todoDoing[index] = item
                })
            }
            if(todoWhich == 'todoFinish') {
                var arrf = JSON.parse(window.localStorage.getItem('todoFinish'))
                this.todoFinish.splice(0, this.todoFinish.length)
                arrf.forEach((item,index,arr) => {
                    this.todoFinish[index] = item
                })
            }
        })
    }
}
</script>

<style scoped>
.Main {
    display: flex;
    justify-content: space-around;
    margin : 0 auto;
}
/* .card {

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
} */
</style>