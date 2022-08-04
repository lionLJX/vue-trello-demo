<template>
    <div class="Item" v-if="isshow">{{todo.content}}
    <div class="choose" @click="chooseShow">...
        <div class="cha" v-on:click="chaShow" v-show="whethershow">×</div>
        <div class="move" v-show="moveshow">移动</div>
    </div>
    </div>
</template>

<script>
export default {
    name : 'Item',
    props : {
        todo : Object
    },
    data() {
        return {
            isshow : true,
            whethershow : false,
            moveshow : false
        }
    },
    methods : {
        chaShow (){
            this.isshow = !this.isshow;
        },
        chooseShow () {
            this.whethershow = !this.whethershow;
            this.moveshow = !this.moveshow;
        }
    }
}
</script>

<style>
.Item {
    position: relative;
    color: #000;
    display: block;
}

.cha {
    position: absolute;
    left: 20px;
    top: 42px;
    cursor: pointer;
    width: 60px;
}

.choose {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 290px;
    cursor: pointer;
}

.cha,
.move {
    color: white;
    background-color: rgb(1, 19, 31);
    opacity: .7;
}

.move {
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 16px;
    font-weight: 400;
    width: 60px;
}

.cha:hover,
.move:hover {
    left: 30px;
    transition: .7s ease-in-out;
}
</style>