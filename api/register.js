import request from '@/utils/request'
export default {
  //注册
  registerUser(formItem) {
    debugger
    return request({
      url: `/educenter/member/register`,
      method: 'post',
      data:formItem,
    })
  },
  //获取验证码
  sendCode(mobile){
    return request({
      url: `/edumsm/msm/send/${mobile}`,
      method: 'get'
    })
  },
}
