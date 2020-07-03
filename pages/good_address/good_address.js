// pages/good_address/good_address.js
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

    check_num:0,
  },

  check(e){
		let self = this
		this.setData({
			check_num: e.currentTarget.dataset.i
    })
  },
  
  back(){
    let self = this
    let pages = getCurrentPages()
		let prevPage = pages[pages.length - 2]
		prevPage.setData({
			address:self.data.list[self.data.check_num]
    })
    wx.navigateBack({
      delta: 1
    });
  },

  to_newaddress(){
    wx.navigateTo({
      url: '/pages/good_newaddress/good_newaddress',
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
    this.list.forEach((item,index) => {
      if(item.is_default==1){
        this.setData({
          check_num:index
        })
      }
    });
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