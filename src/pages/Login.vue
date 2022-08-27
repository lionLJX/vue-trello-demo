<template>
    <div id="login">
        <img src="../../static/trello-logo-blue.svg" alt="logo">
        <div class="inner-login">
            <div class="title">登录到Trello</div>
            <div class="login-input-container">
                <form id="login-form" action="" target="the_iframe">
                    <div class="login-input">
                        <input type="text" name="user-email" class="login-email" placeholder="输入电子邮件" v-model="useremail">
                        <input type="password" name="password" class="login-password" placeholder="输入密码" v-model="userpassword">
                        <input type="checkbox" v-model="loginlong" value="true" id="long">
                        <label for="long">保持登录状态</label>
                        <input type="submit" class="login-submit" value="登录" @click="submit">
                    </div>
                    <hr class="hr">
                    <ul class="login-link">
                        <li>
                            <a href="javascript:;" class="forgot-link">无法登录</a>
                            <a href="javascript:;" class="create-link create-circle">注册新账号</a>
                        </li>
                    </ul>
                </form>
                <iframe id="is_iframe" name="the_iframe" style="display:none;"></iframe>
            </div>
        </div>
        <ul class="login-link login-ul">
                    <li>
                        <a href="javascript:;" target="_blank">隐私策略</a>
                        <a href="javascript:;" target="_blank" class="create-circle">服务条款</a>
                    </li>
            </ul>
        <div class="footer">
            <div>

                <img src="../../static/atlassian-logo-blue-small.svg" alt="logo-small" class="logo-small">
            </div>
            <ul class="footer-ul">
                <li class="footer-li">
                    <a href="javascript:;" class="footer-a">模板</a>
                </li>
                <li class="footer-li">
                    <a href="javascript:;" class="footer-a">价格</a>
                </li>
                <li class="footer-li">
                    <a href="javascript:;" class="footer-a">应用</a>
                </li>
                <li class="footer-li">
                    <a href="javascript:;" class="footer-a">工作机会</a>
                </li>
                <li class="footer-li">
                    <a href="javascript:;" class="footer-a">博客</a>
                </li>
                <li class="footer-li">
                    <a href="javascript:;" class="footer-a">开发者</a>
                </li>
                <li class="footer-li">
                    <a href="javascript:;" class="footer-a">关于</a>
                </li>
                <li class="footer-li">
                    <a href="javascript:;" class="footer-a">帮助</a>
                </li>
                <li class="footer-li">
                    <a href="javascript:;" class="footer-a">Cookie设置</a>
                </li>
            </ul>
        </div>
    </div>
</template>



<script >
// window.sessionStorage.setItem('status', 0);

export default {
    name : 'login',
    data(){
        return {
        useremail : '',
        userpassword : '',
        loginlong : false
        }
    },
    methods: {
        submit : function() {
        // 单用户登录功能，只有输入无误才可登录
            if (this.useremail == 'vip@163.com' && this.userpassword == 'vip') {
                console.log('用户信息无误');
                if(this.loginlong == true) {
                    window.localStorage.setItem('useremail', 'vip@163.com');
                    window.localStorage.setItem('userpassword', 'vip');
                }
                this.$router.push('/home');
            }
            else {
                alert('无此用户，请重新输入');
                this.userpassword = '';
                this.useremail = '';
            }
        }
    }
}
</script>

<style>
html,
body {
    height: 100%;
}

body {
    background-image: url('../../static/login-bgi.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

#login img {
    display: block;
    height: 43px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    margin-bottom: 40px;
}

.inner-login {
    max-width: 320px;
    margin: 0 auto;
    background-color: #FFFFFF;
    border-radius: 3px;
    padding: 25px 40px;
    box-shadow: rgba(0,0,0,0.1) 0 0 10px;
}

.inner-login .title {
    text-align: center;
    color: #5E6C84;
    font-size: 16px;
    line-height: 28px;
    margin-top: 10px;
    margin-bottom: 25px;
}

.login-email,
.login-password {
    background: rgb(250, 251, 252);
    border-radius: 4px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 7px;
    margin-bottom: 16px;
    width: 100%;
    height: 44px;
    border: 2px solid #CDD2D4;
}

.login-submit {
    text-align: center;
    background: #5AAC44;
    margin-top: 10px;
    width: 100%;
    height: 35px;
    line-height: 16px;
    border: 0;
    border-radius: 5px;
    color: white;
    font-weight: 900;
    cursor: pointer;
}

.hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid hsl(0,0%,80%);
    margin: 1em 0;
    padding: 0;
}

.login-link {
    width: 320px;
    margin: auto;
}

.login-link li {
    text-align: center;
}

.login-link li a {
    text-decoration: none;
    color: #0052CC;
    font-size: 14px;
    font-weight: 300;
    
}

.create-circle::before {
    content: "\2022";
    margin: 0 8px 0 4px;
}

#login .login-ul {
    margin-top: 10px;
}

li{
    list-style: none;
}


.logo-small {
    width: 150px;
    display: inline-block;
    vertical-align: top;
    margin-top: 1px;
}

.footer-ul {
    text-align: center;
    max-width: 45%;
    margin-lefT: auto;
    margin-right: auto;
}

.footer-li {
    display: inline-block;
}

.footer-a {
    text-decoration: none;
    color: white;
}

.footer-a:hover {
    color: #0052CC;
}
</style>