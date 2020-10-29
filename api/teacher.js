import request from '@/utils/request'
export default {
  //获取讲师 TODO 下面代码需要修改
  getListBanner() {
    return request({
      url: `/educms/bannerfront/getAllBanner`,
      method: 'get'
    })
  }
}
