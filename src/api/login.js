import request from '@/utils/request'
// 1. 获取图形验证码
export const getPicCode = () => {
  return request.get('http://smart-shop.itheima.net/index.php?s=/api/captcha/image')
}

// 2. 获取短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

// 3. 登录功能
export const codeLogin = (mobile, smsCode) => {
  return request.post('http://smart-shop.itheima.net/index.php?s=/api/passport/login', {
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  })
}
