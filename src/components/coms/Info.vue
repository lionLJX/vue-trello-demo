<template>
    <div class="main-info">
        <div class="info">
            <div class="info-title">
                {{title}}
                <div class="sym-omit">...</div>
            </div>
            <!-- <main-item v-for="item in todoData"></main-item> -->
            <div v-for="item in 1" :key="item">
                <main-item></main-item>
            </div>
            <div class="info-add" v-if="!adding">
                <div class="con-add" @click="addBtn">
                    <div class="sym-add">+</div>
                    添加卡片
                </div> 
                <div class="sym-dir">🗇</div>
            </div>
            <div class="info-adding" v-else-if="adding">
                <textarea cols="25" rows="3" class="adding-text" checked v-model="textVal"></textarea>
                <div class="add-bottom">
                    <button class="add-btn">添加卡片</button>
                    <div class="sym-cha" @click="addBtn">🗙</div>
                    <div class="sym-omit-ing">...</div>
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
            content : '',
            adding : false,
            textVal : ''
        }
    },
    components : {
        MainItem
    },
    methods : {
        addBtn() {
            this.adding = !this.adding
            if(this.adding === false)this.textVal = '';
        },
        addItem() {
            if(this.content == '')return ;

            this.todoData.unshift({
                content : this.content
            })
            this.content = ''
        }
    },
    props : ['title','todoList']
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
</style>