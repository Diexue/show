
import regeneratorRuntime from './runtime.min.js';
const wxRequest = async (params = {}, url) => {
  // tip.loading();
  console.log('参数', params.query, params.method, url)
  let data = params.query || {};
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: params.method || 'GET',
      data: data,
      header: params.type || { 'content-type': 'application/x-www-form-urlencoded' },
      success: res => {
        resolve(res)
      }, fail: res => {
        reject(res)
      }
    })
  })

};
module.exports = {
  wxRequest
}