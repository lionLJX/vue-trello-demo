<template>
    <div class="main-info">
        <div class="info">
            <div class="info-title">
                {{title}}
                <div class="sym-omit">...</div>
            </div>
            <!-- <main-item v-for="item in todoData"></main-item> -->
            <div v-if="!(todoWhich == 'todoRecovery')">
                <div v-for="(addL,index) in addList" :key="'addL'+index">
                    <main-item :text="addL" :todoWhich="todoWhich" :index="index" :hour="hour" :min="min"></main-item>
                </div>
                <div v-for="(todo,index) in todoTitle" :key="'todo'+index">
                    <main-item :text="todo" :todoWhich="todoWhich" :index="addNumItem+index" :hour="0" :min="0"></main-item>
                </div>
            </div>
            <!-- 回收站 -->
            <div v-if="(todoWhich == 'todoRecovery')">
                <div v-for="(recovery,index) in relist" :key="index">
                    <main-item :text="recovery" :todoWhich="todoWhich" :index="index" :hour="0" :min="0"></main-item>
                </div>
            </div>
            <div class="info-add" v-if="!adding" v-show="!(todoWhich == 'todoRecovery')">
                <div class="con-add" @click="addBtn">
                    <div class="sym-add">+</div>
                    添加卡片
                </div> 
                <div class="sym-dir">🗇</div>
            </div>
            <div class="info-adding" v-else-if="adding">
                <textarea cols="25" rows="3" class="adding-text"  v-model="textVal" ref="f"></textarea>
                <div class="add-bottom">
                    <button class="add-btn" @click="addItem">保存卡片</button>
                    <div class="sym-cha" @click="addBtn">🗙</div>
                    <div class="sym-omit-ing" title="设置时长" @click="setTime">...</div>
                </div>
                <div class="date-input" v-if="dateShow">
                    <input type="text" class="hour-input" v-model="hour"> 
                    :
                    <input type="text" class="min-input" v-model="min">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainItem from './Item.vue'

export default {
    name : 'MainInfo',
    data() {
        return {
            adding : false,
            textVal : '',
            addList : [],
            oldlist : [],
            dateShow : false,
            hour : 0,
            min : 0,
            relist : []
        }
    },
    computed : {
        todoTitle() {
            if(this.oldlist == '') this.oldlist = this.todoList
            return this.oldlist
        },
        addNumItem() {
            return this.addList.length || 0
        },
        todoRecovery() {
            if(this.relist == '') this.relist = this.todoList
            return this.relist
        }
    },
    components : {
        MainItem
    },
    methods : {
        addBtn() {
            if(this.adding === false)this.textVal = '';
            this.adding = !this.adding
            this.dateShow = false
            if(this.adding === true) {
                this.$nextTick(function(){
                // console.log(this.$refs)
                this.$refs.f.focus()
            })
            }
        },
        addItem(h, m) {
            if(this.textVal == '') {
                this.addBtn()
                return
            }
            this.addList.unshift(this.textVal)
            this.addStorage(this.textVal)
            this.adding = false
            if(m == undefined && this.todoWhich == 'todoDoing') {
                if(this.hour != 0 || this.min != 0) {
                    var timer = setInterval(() => {
                        if(this.min != 0)this.min--
                        else if(this.min == 0) {
                            if(this.hour != 0){
                                this.hour--
                                this.min = 59
                            }else {
                                alert('任务已超时')
                                clearInterval(timer)
                            }
                        }
                    }, 1000*60);
                }
            }
            else  if(m != undefined) {
                this.hour = h
                this.min = m
                var timer = setInterval(() => {
                    if(this.min != 0)this.min--
                    else if(this.min == 0) {
                        if(this.hour != 0){
                            this.hour--
                            this.min = 59
                        }else {
                            alert('任务已超时')
                            clearInterval(timer)
                        }
                    }
                }, 1000*60);
            }
            this.textVal = ''
        },
        addStorage(newTitle) {
            // 用于添加储存新建item
            var arrSto = []
            if(window.localStorage.getItem(this.todoWhich) != '') {
                arrSto = JSON.parse(window.localStorage.getItem(this.todoWhich))
            }
            arrSto.unshift(newTitle)
            window.localStorage.setItem(this.todoWhich, JSON.stringify(arrSto))
        },
        getList(todoWhich) {
            if(todoWhich == 'todoWait')return JSON.parse(window.localStorage.getItem('todoWait')) || ''
            if(todoWhich == 'todoDoing')return JSON.parse(window.localStorage.getItem('todoDoing'))
            if(todoWhich == 'todoFinish')return JSON.parse(window.localStorage.getItem('todoFinish'))
        },
        setTime() {
            if(this.todoWhich != 'todoFinish')
            this.dateShow = true
        }
    },
    props : ['title','todoList','todoWhich'],
    mounted() {
        this.todoRecovery
        // 用全局事件总线创建卡片移动事件
        if(this.todoWhich == 'todoWait') {
            this.$bus.$on('moveToWait', (title,index) => {
                this.textVal = title
                this.addItem()
            })
            this.$bus.$on('deleteWait', (index) => {
                var arr = JSON.parse(window.localStorage.getItem('todoWait'))
                arr.splice(index,1)
                window.localStorage.setItem('todoWait', JSON.stringify(arr))
                // console.log(arr)
                this.$bus.$emit('updateTodoList', 'todoWait')
                this.oldlist = this.getList('todoWait')
                this.addList = []
                // console.log('san')
            })
        }
        if(this.todoWhich == 'todoDoing') {
            this.$bus.$on('moveToDoing', (title,index,hour,min) => {
                this.textVal = title
                this.addItem(hour,min)
            })
            this.$bus.$on('deleteDoing', (index) => {
                var arr =JSON.parse(window.localStorage.getItem('todoDoing'))
                arr.splice(index,1)
                window.localStorage.setItem('todoDoing', JSON.stringify(arr))
                this.$bus.$emit('updateTodoList', 'todoDoing')
                this.oldlist = this.getList(this.todoWhich)
                this.addList = []
                
            })
        }
        if(this.todoWhich == 'todoFinish') {
            this.$bus.$on('moveToFinish', (title,index) => {
                this.textVal = title
                this.addItem()
            })
            // 从完成卡片组中删除（移动到回收站）
            this.$bus.$on('todoFinish', (index) => {
                var arr =JSON.parse(window.localStorage.getItem('todoFinish'))
                arr.splice(index,1)
                window.localStorage.setItem('todoFinish', JSON.stringify(arr))
                this.$bus.$emit('updateTodoList', 'todoFinish')
                this.relist = this.getList(this.todoFinish)
            })
        }

    }
}
</script>


<style scoped>
.info {
    /* display: flex; */
    position: relative;
    width: 250px;
    border-radius: 5px;
    background-color: #dee1e6;
    margin: 0 50px;
    color: #909090;
}

.info-title{
    padding-left: 20px;
    font-size: 16px;
    line-height: 38px;
    color: #0d5c8b;
    font-weight: 700;
}


.sym-omit{
    display: inline-block;
    position: absolute;
    right: 10px;
    top: -2px;
    cursor: pointer;
}

.info-add {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    line-height: 30px;
}

.sym-add {
    padding-right: 5px;
}

.con-add {
    display: flex;
    cursor: pointer;
}

.adding-text {
    margin: 2px 10px;
    background-color: rgb(242, 243, 245);
    resize: none;
    outline: none;
    font-size: 16px;
    border-radius: 4px;
    padding: 4px 7px;
}

.add-bottom {
    display: flex;
    position: relative;
    padding: 0 10px;
    line-height: 40px;
    /* height: 114px; */
}

.add-btn {
    background-color: #0277bf;
    padding: auto 0;
    font-size: 16px;
    color: #f2f2f2;
    font-weight: 500;
    cursor: pointer;
    box-shadow: #909090 2px;
    border-radius: 4px;
}

.sym-cha {
    margin-left: 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
}

.info-adding {
    height: 109px;
    transition: .2s;
}

.sym-omit-ing {
    position: absolute;
    font-weight: 700;
    right: 23px;
    top: -6px;
    cursor: pointer;
}

.date-input {
    /* height: 50px; */
    background-color: #dee1e6;
    font-size: 14px;
}

.hour-input,
.min-input{
    display: inline-block;
    margin: 10px 13px;
    padding: 5px;
    padding-left: 37px;
    background-color: #fff;
    border-radius: 3px;
    width: 51px;
    height: 30px;
    font-size: 16px;
}

</style>