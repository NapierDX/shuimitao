// pages/my_address/my_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:0,
        name:'张三',
        phone:'13834567890',
        sheng:'广东省',
        shi:'河源市',
        qu:'连平县',
        text:'南山大道xxx号',
        is_default:1,
      },
      {
        id:1,
        name:'李四',
        phone:'13834567890',
        sheng:'广东省',
        shi:'河源市',
        qu:'连平县',
        text:'南山大道xxx号',
        is_default:0,
      },
      {
        id:2,
        name:'王五',
        phone:'13834567890',
        sheng:'广东省',
        shi:'河源市',
        qu:'连平县',
        text:'南山大道xxx号',
        is_default:0,
      },
    ],

    
    check_num:-1,
  },

  check(e){
		let self = this
		this.setData({
			check_num: e.currentTarget.dataset.i
    })
  },

  to_newaddress(){
    wx.navigateTo({
      url: '/pages/good_newaddress/good_newaddress',
    });
  },

  delete(){
    let self = this
    if(self.data.check_num==-1){
      wx.showToast({
        icon:'none',
        title: '请先选择一个地址',
        duration: 2000
      });
    }
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
    this.setData({
      check_num:-1,
    })
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