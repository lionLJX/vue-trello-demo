<template>
    <div class="home-header">
        <div class="contain-img">
            <img src="../../static/trello-logo-blue.svg" alt="logo">
        </div>
        <div class="contain-out"><div class="login-out" @click="loginOut">退出登录</div>
        </div>

    </div>
</template>

<script>
export default {
    name : 'Header',
    methods : {
        loginOut() {
            window.sessionStorage.removeItem('useremail');
            window.sessionStorage.removeItem('userpassword');
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.home-header {
    width: 100%;
    height: 50px;
    background-color: rgb(2, 106, 167);
}

.home-header div {
    display: inline-block;
}
.home-header .contain-img img {
    height: 30px;
    padding: 10px;

}

/* .search, */
.contain-out {
    float: right;
}

.contain-out {
    width: 100px;
    text-align: center;
    height: 100%;
    margin-right: 60px;
    cursor: pointer;
}

.login-out {
    line-height: 30px;
    margin: 10px 15px;
    border-radius: 5px;
    border: 1px solid white;
    color: white;;
}

/* .search {
    height: 100%;
    width: 100px;
    background-color: rgb(2, 106, 167);
}

.search-input {
    height: 30px;
    border-radius: 10px;
} */
</style>
