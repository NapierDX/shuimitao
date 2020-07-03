// pages/good_info/good_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //商品数据
    info:{
      id:0, //商品id
      main_photo:'',  //封面图
      photos:[  //副图
        '','','',''
      ],
      price:20, //商品价格
      title:'上坪鹰嘴蜜桃-五斤', //商品名
      content:'', //商品详情介绍
    },

    showtype:false,

    num_check:1,

  },

  //显示规格栏
	show_type(){
		this.setData({
			showtype: !this.data.showtype,
		})
	},

  num_jian(){
    let self = this
    if(self.data.num_check==1){
      return 
    }else{
      self.setData({
        num_check: self.data.num_check - 1
      })
    }
  },
  num_jia(){
    let self = this
    self.setData({
      num_check: self.data.num_check + 1
    })
  },

  confirm(){
    wx.navigateTo({
      url: '/pages/good_buy/good_buy'
    });
      
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