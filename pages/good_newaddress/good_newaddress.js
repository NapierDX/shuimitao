// pages/good_newaddress/good_newaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    phone:'',
    text:'',

    city:'',
    sheng:'',
    shi:'',
    qu:'',
    
		switch:false,
  },

  input_name(e){
		this.setData({
			name:e.detail.value
		})
	},
	input_phone(e){
		this.setData({
			phone:e.detail.value
		})
	},
	input_text(e){
		this.setData({
			text:e.detail.value
		})
	},
  change_switch(e){
		this.setData({
			switch:e.detail.value
		})
	},
  pickcity:function(e){
		console.log(e)
		this.setData({
			city:e.detail.value,
			sheng:e.detail.value[0],
			shi:e.detail.value[1],
			qu:e.detail.value[2]
		})
  },
  //保存地址
  save_address(){
    wx.navigateBack({
      delta: 1
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