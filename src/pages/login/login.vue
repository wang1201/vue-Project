<template>
    <div id="login">
        <div>
            <dl class="list">  
              
                <dd class="nav">
                    <ul class="taba taban samfix" data-com="tab">
                        <li tab-target="normal-login-form" >
                          <router-link :to="{name:'account'}" class="react">美团账号登录</router-link>
                          </li>
                        <li tab-target="quick-login-form" >
                          <router-link :to="{name:'phone'}"  class="react">手机验证登录</router-link>
                        </li>
                    </ul>
                </dd>
            </dl>
        </div>
        <router-view
         tag="div"
         >
          
        </router-view>
        <ul class="subline">
            <li><a href="//i.meituan.com/account/signup">立即注册</a></li>
            <li class="pull-right"><a href="https://i.meituan.com/risk2/resetreq">找回密码</a></li>
        </ul>
        
        <footer>
            <div class="copyright"><span class="copyright">&copy; 猫眼电影 客服电话：<a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a></span></div>
        </footer>
    </div>
</template>

<script>
export default {
  data(){
    return{
       errorMsg: "",
    }
  }
}
</script>

<style lang="scss">
#login {
  height: 100%;
  background: #f4f4f4;
  .mes {
    font-size: 0.36rem;
    background-color: #fff6e0;
    color: #d78900;
    border-bottom: 1px solid #ffebc8;
    text-align: center;
    padding: 0.2rem;
    line-height: 1.6;
    display: block;
    transform-origin: 0px 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
  }
  .nav {
    text-align: center;
  }
  .subline {
    margin: 0.28rem 0.2rem;
  }
  .subline li {
    display: inline-block;
  }
  .captcha img {
    margin-left: 0.2rem;
  }
  .captcha .btn {
    margin-top: -0.15rem;
    margin-bottom: -0.15rem;
    margin-left: 0.2rem;
  }
  .forget {
    display: none;
  }
  div.nav-wrap-right a {
    width: auto;
  }
  .need-slip-bg {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
  }
  .need-slip-wrapper {
    position: fixed;
    left: 0.8rem;
    right: 0.8rem;
    top: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 999;
    height: 100%;
  }
  .need-slip {
    height: 100%;
  }
  dl.list:first-child {
    margin: 0;
    border-top: 0;
  }
  dl.list {
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    margin-top: 0.2rem;
    margin-bottom: 0;
    background-color: #fff;
  }
  dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  dl.list dt:last-child,
  dl.list dd:last-of-type {
    border-bottom: 0;
  }
  dl.list dt,
  dl.list dd {
    margin: 0;
    border-bottom: 1px solid #d6d6d6;
    overflow: hidden;
    font-size: inherit;
    font-weight: 400;
    position: relative;
  }
  .nav {
    text-align: center;
  }
  dd {
    display: block;
    margin-inline-start: 40px;
  }
  .taba {
    display: -webkit-box;
    display: -ms-flexbox;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    position: relative;
    border-bottom: 0.1rem solid #d6d6d6;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul,
  menu,
  dir {
    display: block;
    list-style-type: disc;
  }
  .taba li {
   display: block;
    text-align: center;
    -webkit-box-flex: 1;
    list-style: none;
    position: relative;
    width: 50%;
    overflow: hidden;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .taba li a.react {
    padding-top: 0.28rem;
    padding-bottom: 0.2rem;
  }
  a.react,
  label.react {
    display: block;
    color: inherit;
    height: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  a {
    width: 100%;
    color: #df2d2d;
    text-decoration: none;
    outline: 0;
  }
  dl.list:first-child {
    margin: 0;
    border-top: 0;
  }
  dl.list-in {
    margin: 0;
    border-top: 0;
  }
  dl.list {
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    margin-top: 0.2rem;
    margin-bottom: 0;
    background-color: #fff;
  }
  dl.list dd dl {
    margin: 0;
    margin-bottom: -1px;
    // padding-left: 0.2rem;
    border: 0;
  }
  dl.list dd dl > .dd-padding,
  dl.list dd dl dd > .react,
  dl.list dd dl > dt {
    padding-left: 0;
  }

  dl.list dt,
  dl.list dd {
    margin: 0;
    border-bottom: 1px solid #d6d6d6;
    overflow: hidden;
    font-size: inherit;
    font-weight: 400;
    position: relative;
  }
  .kv-line-r {
    display: -webkit-box;
    display: -ms-flexbox;
    margin: 0.2rem 0;
  }
  dd {
    display: block;
    margin-inline-start: 40px;
  }
  .login-icon {
    display: none;
  }
  img {
    vertical-align: middle;
    border: 0;
  }
  dl.list dd > .input-weak {
    width: 100%;
    display: block;
  }
  input.input-weak,
  textarea.input-weak {
    border: 0;
    height: 1.2rem;
    /* margin: -0.15rem 0; */
    text-indent: 0.1rem;
    line-height: 1;
    font-size: 0.4rem;
    border-radius: 0.06rem;
    padding: 0 0.2rem;
  }
  input,
  button,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }
  input[type="password" i] {
    -webkit-text-security: disc !important;
  }
  .btn-wrapper {
    margin: 0.4rem 0.2rem;
  }
  div {
    display: block;
  }
  .btn-larger {
    height: 0.94rem;
    line-height: 0.94rem;
    font-size: 0.4rem;
  }
  .btn-block {
    display: block;
    width: 100%;
  }
  .btn {
    display: inline-block;
    margin: 0;
    text-align: center;
    height: 1rem;
    padding: 0 0.4rem;
    border-radius: 0.06rem;
    color: #fff;
    border: 0;
    background-color: #df2d2d;
    font-size: 0.4rem;
    vertical-align: middle;
    line-height: 0.6rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-user-select: none;
  }
  .subline {
    margin: 0.28rem 0.2rem;
  }
  .subline li {
    display: inline-block;
  }
  a {
    // color: #df2d2d !important;
    text-decoration: none;
    outline: 0;
  }
  input {
    outline: none;
  }
  .copyright {
    text-align: center;
    margin-top: 0.3rem;
    padding: 0 0.2rem 0.4rem;
    // background-color: #f8f8f8;
  }
  .kv-line-r > h6,
  .kv-line-r > .kv-k {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    font-size: inherit;
    font-weight: 400;
    margin-right: 0.2rem;
    display: block;
  }

  .kv-line-r > .kv-v,
  .kv-line-r > p {
    display: block;
  }
  .btn:disabled,
  .btn.btn-disabled {
    background-color: #dcdcdc;
    color: #999;
    border: 0;
  }
  #smsCode {
    height: 0.8rem;
    margin-top: 0.2rem;
    margin-right: 0.25rem;
  }
 .react.router-link-exact-active.router-link-active{
   color: #df2d2d;
  //  position: absolute;
    // bottom: -0.08rem;
    border-bottom: 0.08rem solid #df2d2d;
    -webkit-transition: left 0.2s ease-in;
  }
}
</style>
