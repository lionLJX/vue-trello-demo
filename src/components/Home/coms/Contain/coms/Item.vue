<template>
    <div class="Item" v-if="isshow">{{todo.content}}
    <div class="cha" v-on:click="chaShow">×</div>
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
            isshow : 'true'
        }
    },
    methods : {
        chaShow (){
            this.isshow = !this.isshow;
        }
    }
}
</script>

<style>
.Item {
    color: #000;
    display: inline-block;
}

.cha {
    display: inline-block;
    position: relative;
    left: 105px;
}
</style>