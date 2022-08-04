<template>
    <div class="Info">
        <div class="info-contain">
            <div class="add">
                <div class="add-symbol" >+</div>
                <div class="add-btn" >添加卡片</div>
            </div>
            <div class="info-logo"></div>
        </div>
        <div class='input-add-block'>
            <input type="text" class="input-item" checked v-model="content" @keyup.enter="addItem">
        </div>
        <main-item v-for="(item, index) in todoData" :key="index" :todo="item"></main-item>
    </div>
</template>

<script>
import Item from './Item.vue'

export default {
    name : 'Info',
    data() {
        return {
            todoData : [],
            content : ''
        }
    },
    components : {
        MainItem : Item
    },
    // methods : {
    //     childClick :function() {
    //         console.log(inputdisplay);
    //         inputdisplay = true;
    //     }
    // }
    methods : {
        addItem() {
            if(this.content == '')return ;

            this.todoData.unshift({
                id : 2,
                content : this.content
            })
            this.content = ''
        }
    }
}
</script>


<style>
.input-add-none {
    display: none;
}

.input-add-block {
    display: block;
}

.input-item {
    height: 36px;
    width: 250px;
    border-radius: 5px;
    font-size: 16px;
}

.info-contain {
   font-weight: 400;
   color: rgb(147, 152, 164);
}

.info-contain {
    height: 40px;
        border-bottom: 1px solid black;
}

.add .add-symbol,
.add .add-btn {
    display: inline-block;
    line-height: 35px;
}

.add-symbol {
    position: relative;
    top: 0px;
    left: -74px;
    font-size: 30px;
}

.add-btn {
    position: relative;
    left: -70px;
    top: -5px;
}

.add {
    width: 250px;
    height: 34px;
    cursor: pointer;
    border-radius: 5px;
    padding: 3px 0 3px 0;
}

.add:hover {
    background-color: rgb(217, 217, 225);
    transition: .4s;
}

</style>