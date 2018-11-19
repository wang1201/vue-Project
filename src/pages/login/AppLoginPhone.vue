<template>
    <div>
        <p class="mes" v-if="errorMsg">{{errorMsg}}</p>
        <form id="quick-login-form" autocomplete="off" method="post"  @submit.prevent="login">
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
                <button type="submit" class="btn btn-larger btn-block mj_login login-btn">登录</button>
            </div>
        </form>

    </div>
</template>
<script>
export default {
  data() {
    return {
      isCodeShow: false,
      phone: "",
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
