<template>
    <div>
        <form id="normal-login-form" autocomplete="off" method="post">
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
    </div>
</template>
