//index.js
//获取应用实例
const app = getApp()
let util = require('../../utils/util.js');   //util
let http = require('../../utils/http.js');   //请求

//Page Object
Page({
  data: {
    banner:[
      {url:'../../static/img/banner_1.png'},
      {url:'../../static/img/banner_2.png'},
      {url:'../../static/img/banner_3.png'},
    ],
    list_height:'',
  },
  //options(Object)
  onLoad: function(options) {
    let height = wx.getSystemInfoSync().windowHeight
		let width = wx.getSystemInfoSync().windowWidth
		height = height * 750 / width - 320
		this.setData({
			list_height: height
		})
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  
