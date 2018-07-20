// pages/form/index.js
import regeneratorRuntime from '../../utils/runtime.min.js';
import api from '../../utils/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData:[
      { name: 'tel', placeholder: "手机号码", text: "电话" },
      { name: 'name', placeholder: "中引文姓名", text: "姓名" },
       { name: 'num', placeholder: "13位学号", text: "学号" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  formSubmit(e){
    console.log(e);

  }
})