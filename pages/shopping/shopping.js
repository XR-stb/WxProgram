// pages/shopping/shopping.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabCur: 0, //默认选中
        tabs: [{
            name: '全部订单',
            id: 0
          },
          {
            name: '等待支付',
            id: 1
          },
          {
            name: '待发货',
            id: 2
          },
          {
            name: '待评价',
            id: 3
          },
          {
            name: '五星好评',
            id: 4
          },
          {
            name: '差评订单',
            id: 5
          }
        ]
      },
    
      //选择条目
      tabSelect(e) {
        this.setData({
          tabCur: e.currentTarget.dataset.id,
          scrollLeft: (e.currentTarget.dataset.id - 2) * 200
        })
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