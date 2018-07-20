// pages/index/index.js
import regeneratorRuntime from '../../utils/runtime.min.js';
import api from '../../utils/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showForm:false,
    data:[
      { video:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"},
      { text: "这里是文字这里是文字", url: "detail", img: 'http://img95.699pic.com/photo/50054/1797.jpg_wh300.jpg!/fh/300//quality/90',style:{imgw:20,imgh:30}  },
      { text: "这里是文字这里是文字这里是文字这里是文字", },
      { img: 'http://img95.699pic.com/photo/50054/1797.jpg_wh300.jpg!/fh/300//quality/90', showBtn:true },
      { text:"这里是文字这里是文字这里是文字这里是文字"},
      {video: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" },
      { text: "这里是文字这里是文字这里是文字这里是文字", img:"http://img95.699pic.com/photo/50054/1797.jpg_wh300.jpg!/fh/300//quality/90"},
      { img: 'http://img95.699pic.com/photo/50054/1797.jpg_wh300.jpg!/fh/300//quality/90',},
      { text: "这里是文字这里是文字这里是文字这里是文字"},
      { img: 'http://img95.699pic.com/photo/50054/1797.jpg_wh300.jpg!/fh/300//quality/90',  },
      { img: [{ src: 'http://img95.699pic.com/photo/50054/1797.jpg_wh300.jpg!/fh/300//quality/90'}], },
      { src: 'http://img95.699pic.com/photo/50054/1797.jpg_wh300.jpg!/fh/300//quality/90',form:[
        { name: 'tel', placeholder: "电话", text:"电话"},
        { name: 'name', placeholder: "姓名", text: "姓名"}
      ], formStyle:{

      }},
      {write:true}
    ],
    data2:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    let res = await api.getData({});
    console.log('数据',res)
    this.setData({
      data2:res.data.block
    })
    console.log('jiance',this.data.data2)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.formCard = this.selectComponent('formCard')
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
  showBtn(e){
    this.setData({
      showForm:true
    })
  },
  formSubmit(e){
    console.log('data-->',e)
  },
  close(e){
    this.setData({
      showForm:false
    })
  },
  goform(e){
    wx.navigateTo({
      url: '/pages/form/index',
    })
  },
  goUrl(e){
    console.log('cans',e)
    let page=e.currentTarget.dataset.page;
    wx.navigateTo({
      url: `/pages/${page}/index`,
    })
  }
})