<template>
    <div class="item" :style="zStyle">
        <div class="list-item" @click="choiceBtn">
            {{text}}
            <div class="date" v-if="!(todoWhich == 'todoFinish')" v-show="whetherShow">{{hour}}小时{{min}}分钟</div>
            <div class="sym-pan">🖊️</div>
        </div>
        <div class="box-list" v-show="showList">
            <div class="move-box" v-if="!(todoWhich == 'todoFinish')">
                <div class="move-btn" @click="moveTo" >移动 > </div>
                <transition name="appear" appear>
                    <div class="move-shadow" v-show="moveShow">
                        <div class="wait" v-if="todoWhich == 'todoDoing'" @click="moveToWait">待办</div>
                        <div class="doing" v-if="todoWhich == 'todoWait'" @click="moveToDoing">进行中</div>
                        <div class="finish" @click="moveToFinish">完成</div>
                    </div>
                </transition>
            </div>
            <div class="edit-btn">编辑</div>
            <div class="delete-btn" v-if="!(todoWhich == 'todoDoing')">删除</div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ListItem',
    props : ['text','todoWhich','index','hour','min'],
    methods : {
        choiceBtn() {
            if(this.zStyle == '')this.zStyle = 'z-index : 100'
            else {
                this.zStyle = ''
                this.moveShow = false
            }
            this.$bus.$emit('shadowShow')
            this.showList = !this.showList
        },
        moveTo() {
            this.moveShow = true
        },
        // 调用全局事件总线中的卡片移动事件
        moveToWait() {
            this.$bus.$emit('moveToWait', this.text, this.index)
            this.$bus.$emit('deleteDoing', this.index)
            this.choiceBtn()
        },
        moveToDoing() {
            if(this.hour != 0 || this.min != 0) {
                this.$bus.$emit('moveToDoing', this.text, this.index, this.hour,this.min)
            }
            else this.$bus.$emit('moveToDoing', this.text, this.index)
            this.$bus.$emit('deleteWait', this.index)
            console.log(this.index)
            this.choiceBtn()
        },
        moveToFinish() {
            this.$bus.$emit('moveToFinish', this.text, this.index)
            if(this.todoWhich == 'todoWait')this.$bus.$emit('deleteWait', this.index)
            if(this.todoWhich == 'todoDoing')this.$bus.$emit('deleteDoing', this.index)
            this.choiceBtn()
        },
        whetherS() {
            if(this.min == undefined)this.whetherShow =  false
            else if(this.min == 0 && this.hour == 0) this.whetherShow =  false
            else this.whetherShow = true
        }
    },
    data() {
        return {
            showList : false,
            zStyle : '',
            moveShow : false,
            whetherShow  : ''
        }
    },
    mounted() {
        this.whetherS()       
    },
    // computed : {
    //     whetherSn() {
    //         return
    //     }
    // }
}
</script>

<style scoped>
.item {
    position: relative;
    height: 35px;
    /* z-index: 100; */
}

.list-item {
    position: relative;
    margin: 2px 5px;
    padding: 2px 10px;
    font-size: 14px;
    line-height: 31px;
    cursor: pointer;
}

.list-item:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
        top: -3px;
        transition: .4s;
}

.sym-pan {
    position: absolute;
    right: 5px;
    top: 2px;
}

.box-list {
    position: absolute;
    right: -44px;
    top: 0;
    /* z-index: 110; */
    /* background-color: rbga(0,0,0,.7); */
}

.edit-btn,
.move-btn,
.delete-btn {
    position: relative;
    right: 0;
    background-color: rgba(0,0,0,.6);
    margin-bottom: 3px;
    padding: 4px 8px ;
    font-size: 13px;
    cursor: pointer;
}

.edit-btn:hover,
.move-btn:hover,
.delete-btn:hover {
    right: -5px;
    transition: .5s;
}

.move-shadow {
    position: absolute;
    right: -44px;
}

.move-shadow div {
    position: relative;
    right: -5px;
    top: -38px;
    background-color: rgba(0,0,0,.6);
    margin-bottom: 3px;
    padding: 2px 3px ;
    font-size: 12px;
    cursor: pointer;
}

.move-shadow div:hover {
    right: -15px;
    transition : .5s;
}

@keyframes appear {
    from{
        right: 0;
        /* opacity: 0; */
    }
    to {
        right: -44px;
        /* opacity: 1; */
    }
}

.appear-enter-active {
    animation: appear .5s;
}

.date {
    position: absolute;
    right: 32px;
    top: 3px;
    font-size: 12px;
}
</style>