<template>
    <div class="home-header">
        <div class="contain-img">
            <img src="../../static/trello-logo-blue.svg" alt="logo">
        </div>
        <div class="contain-out"><div class="login-out" @click="loginOut">退出登录</div>
        </div>
        <div class="contain-recovery">
            <div class="to-recovery" @click="routerLink">{{title}}</div>
        </div>
        

    </div>
</template>

<script>
export default {
    name : 'Header',
    methods : {
        loginOut() {
            window.localStorage.removeItem('useremail');
            window.localStorage.removeItem('userpassword');
            this.$router.push('/login');
        },
        routerLink() {
            if(this.title === '回收站')this.$router.push('/recovery')
            else this.$router.push('/home')
        }
    },
    props : ['title']
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


.contain-out,
.contain-recovery {
        float: right;
    width: 100px;
    text-align: center;
    height: 100%;
    margin-right: 60px;
    cursor: pointer;
}

.login-out,
.to-recovery {
    line-height: 30px;
    margin: 10px 15px;
    border-radius: 5px;
    border: 1px solid white;
    color: white;;
}

.contain-recovery {
    margin-right: 20px;
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
