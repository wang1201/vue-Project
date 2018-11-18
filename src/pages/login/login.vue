<template>
    <div id="login">
        <div>
            <dl class="list">
                
                <p class="mes" v-if="errorMsg">{{errorMsg}}</p>
                <dd class="nav">
                    <ul class="taba taban samfix" data-com="tab">
                        <li tab-target="normal-login-form" gaevent="imt/login/tab/normal"><a class="react">美团账号登录</a></li>
                        <li class="active" tab-target="quick-login-form" gaevent="imt/login/quickBuy/"><a class="react">手机验证登录</a></li>
                        <div class="slide" style="width: 355px; left: 375px;"></div>
                    </ul>
                </dd>
            </dl>
            <form id="normal-login-form"  autocomplete="off" method="post" style="display:none">
                <dl class="list list-in">
                    <dd class="visibale">
                        <dl>
                            <dd class="dd-padding kv-line-r">
                                <img class="login-icon" src="https://ms0.meituan.com/touch/img/account/login/icon_login_user@2x.png" />
                                <input id="username" class="input-weak J-login-name J-input J-account" type="text" placeholder="账户名/手机号/Email" name="email" value="" required>
                                <div class="to-del J-to-del" style="display: none"></div>
                            </dd>
                            <ul class="tel-select J-select-user J-select" style="display: none">
                            </ul>
                            <dd class="dd-padding kv-line-r">
                                <img class="login-icon" src="https://ms0.meituan.com/touch/img/account/login/icon_login_password@2x.png" />
                                <input id="password" class="input-weak J-input" type="password" placeholder="请输入您的密码" name="password" required />
                                <div class="to-del J-to-del" style="display: none"></div>
                            </dd>
                        </dl>
                    </dd>
                </dl>

                <div class="btn-wrapper">
                    <button type="submit" gaevent="imt/login/normal" class="btn btn-larger btn-block disabled mj_login login-btn">登录</button>
                </div>
                <input type="hidden" name="touchEvents" />
                <input type="hidden" name="extraFingerPrint" />
                <div class="forget">
                    <a class="link" href="https://i.meituan.com/risk2/resetreq">忘记密码</a>
                </div>
                <input type="hidden" name="requestCode">
                <input type="hidden" name="responseCode" />
            </form>
            <form id="quick-login-form" autocomplete="off" method="post" style="display:block"  @submit.prevent = "login">
                <dl class="list list-in">
                    <dd class="visibale">
                        <dl>
                            <dd class="kv-line-r dd-padding" data-com="smsBtn_quick" data-requrl="/account/custom/mobilelogincode2">
                                <img class="login-icon icon-align" src="https://ms0.meituan.com/touch/img/account/login/icon_signin_phone@2x.png" />
                                <input type="tel" v-model="phone" name="mobile" id="login-mobile" class="input-weak kv-k J-input J-tel J-login-name" placeholder="请输入手机号" maxlength="11">
                                <div class="to-del J-to-del-mobile J-to-del" style="display: none"></div>
                                <button v-if="isCodeShow" @click="sendCode" id="smsCode" type="button" class="btn btn-weak kv-v btn-captacha">{{isResend ? '重新获取('+resendTime+'s)' : '获取验证码'}}</button>
                            </dd>
                            <ul class="tel-select J-select" style="display: none">
                            </ul>
                            <dd class="kv-line-r dd-padding">
                                <img class="login-icon" src="https://ms0.meituan.com/touch/img/account/login/icon_phone_check_code@2x.png" />
                                <input v-model="code" class="input-weak kv-k J_input_sms J-input" name="code" type="tel" pattern="[0-9]+" placeholder="请输入短信验证码">
                                <div class="to-del J-to-del-code J-to-del" style="display: none"></div>
                            </dd>

                        </dl>
                    </dd>
                </dl>
                <div class="btn-wrapper">
                    <button type="submit"  class="btn btn-larger btn-block mj_login login-btn">登录</button>
                </div>
            </form>

        </div>
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
  data() {
    return {
      isCodeShow: false,
      phone: "18500210807",
      isResend: false,
      resendTime: 60,
      code: "",
      errorMsg: "",
      returnMsg:'',
    };
  },
  methods: {
    async sendCode() {
      if (!this.isResend) {
        // 发送验证码
        // ajax 如过成功
        let res = await this.$http(
          {
            url: "/mt/account/custom/mobilelogincode2",
            method: "POST",
            
            // headers: {
            //   "Content-type": "application/x-www-form-urlencoded"
            // },
            data: {
              mobile: this.phone
            },
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
            
          },
          true
        );
        if (res.status === 0) {
          // 验证码发送成功
          this.returnMsg = res.ext;
          this.authCode();
        } else {
          this.errorMsg = res.message;
        }
      }
    },
    async login() {
      let res = await this.$http(
        {
          url: "/mt/account/mobilelogin2",
          method: "POST",
          data: {
            // "2f3ee20be6a12d25c541a3d1dfe2f839"
            mobile: this.returnMsg.user,
            code: this.code,
            touchEvents:
              '{"login_quick_input_mobile":{"editStartedTimeStamp":1542535337,"editFinishedTimeStamp":1542535340,"keyboardEvent":"0-6-0-"},"login_quick_input_sms_code":{"editStartedTimeStamp":1542535340,"editFinishedTimeStamp":1542535351,"keyboardEvent":"0-1-0-bp|ah|n4|9g|8p"},"login_quick_button_sms_code":{"touchPoint":"{2, 19}","touchTimeStamp":1542535337},"login_quick_button_submit":{"touchPoint":"{250, 1}","touchTimeStamp":1542535351}}',
            extraFingerPrint:
              '{"listOfPlugins":"[]","cookiesEnabled":true,"screenResolution":"375*667","colorDepth":24,"doNotTrack":"unknown","canvas":"1ffccc8b7e66aee6c2e5b3a44a4a5f98f9038b13","webglVendor":"Google Inc.","webglRenderer":"ANGLE (Intel(R) Iris(TM) Graphics 5100 Direct3D11 vs_5_0 ps_5_0)","urlSource":"http://m.maoyan.com/myCenter?$from=canary&isid_key=B407023738D2EE3CD1B48EA6ACE3F9D1FE14DFB0E3F1ADC7A47B855650A8BCC5&isid_key=141CE98A52D86F06F6236B6F897024256E21412143123A8423CDA2E847EA64A7"}',
            action: 'login',
            request_code: this.returnMsg.request_code
          },
          transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
        },
        true
      );
      if (res.status === 0) {
        // 验证码发送成功

        // 存储
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        for (const key in res.data) {
          this.$cookies.set(key, res.data[key]);
        }

        this.$router.replace({ name: "my" });
      }else {
          this.errorMsg = res.message;
        }
    },
    authCode() {
      // 验证码处理
      this.isResend = true;
      this.timer = setInterval(() => {
        this.resendTime--;
        if (this.resendTime === 0) {
          clearInterval(this.timer);
          this.isResend = false;
          this.resendTime = 60;
        }
      }, 1000);
    }
  },
  watch: {
    phone: {
      immediate: true,
      handler(val) {
        let result = /^1[34578]\d{9}$/.test(this.phone.trim());
        this.isCodeShow = result;
      }
    }
  }
};
</script>
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
    color: #df2d2d;
    text-decoration: none;
    outline: 0;
  }
  .taba li.active {
    color: #df2d2d;
    // border-bottom: 0.05rem solid #df2d2d;
  }
  .taba .slide {
    position: absolute;
    bottom: -0.08rem;
    border-bottom: 0.08rem solid #df2d2d;
    -webkit-transition: left 0.2s ease-in;
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
  .taba .slide {
    position: absolute;
    bottom: -0.08rem;
    border-bottom: 0.08rem solid #df2d2d;
    -webkit-transition: left 0.2s ease-in;
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
}
</style>
