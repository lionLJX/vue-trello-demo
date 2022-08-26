<template>
    <div class="item">
        <div class="list-item">
            test
            <div class="sym-pan">🖊️</div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ListItem',
}
</script>

<style scoped>
.item {
    height: 35px;
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

</style>