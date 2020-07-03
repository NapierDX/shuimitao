// pages/orderlist/orderlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		screenHeight:'',
    check:0,
    
    list:[
      {
        id:0,
        main_photo:'',  //封面图
        name:'上坪鹰嘴蜜桃-五斤',
        num:4, //购买数量
        pay:85, //总价
        addtime:'2020-7-1 12:00:00'
      },
      {
        id:0,
        main_photo:'',  //封面图
        name:'上坪鹰嘴蜜桃-二十斤',
        num:2, //购买数量
        pay:145, //总价
        addtime:'2020-7-1 12:00:00'
      },
      {
        id:0,
        main_photo:'',  //封面图
        name:'上坪鹰嘴蜜桃-五斤',
        num:2, //购买数量
        pay:45, //总价
        addtime:'2020-7-1 12:00:00'
      },
    ],
  },

  check(e){
		this.data.check = e.currentTarget.dataset.i
		this.setData({
			check:this.data.check,
		})
  },
  
  to_info(e){
    let id = e.currentTarget.dataset.i
    wx.navigateTo({
      url: '/pages/orderinfo/orderinfo'
    });
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		let _systemInfo = wx.getSystemInfoSync()
    let height = wx.getSystemInfoSync().windowHeight
		let width = wx.getSystemInfoSync().windowWidth
		height = height * 750 / width - 210 
		this.setData({
			screenHeight: height
		})
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

  }
})