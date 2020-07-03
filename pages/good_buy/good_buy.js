// pages/good_buy/good_buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{
      id:0,
      name:'张三',
      phone:'13834567890',
      sheng:'广东省',
      shi:'河源市',
      qu:'连平县',
      text:'南山大道xxx号',
      is_default:1,
    },

    order:{
      id:0,
      main_photo:'',  //封面图
      name:'上坪鹰嘴蜜桃-五斤',
      num:2, //购买数量
      price:40, //总价
    },

    freight:5,//运费
  },

  //选地址
	to_address(){
		wx.navigateTo({
			url: '/pages/good_address/good_address',
		});
  },
  
  //支付
  to_pay(){

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

  }
})