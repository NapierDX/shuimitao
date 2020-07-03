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

    list:[
      {
        id:0,
        url:'',
        price:20,
        name:'上坪鹰嘴蜜桃-五斤'
      },
      {
        id:1,
        url:'',
        price:37,
        name:'上坪鹰嘴蜜桃-十斤'
      },
      {
        id:2,
        url:'',
        price:70,
        name:'上坪鹰嘴蜜桃-二十斤'
      },
    ],

    list_height:'',
  },

  to_info(e){
    let i = e.currentTarget.dataset.i
    wx.navigateTo({
      url: '/pages/good_info/good_info'
    });
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
  
