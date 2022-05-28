// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone_number:'',//手机号码
        code:''//验证码
    },

    // 获取输入框手机号码
    getPhone:function(e){
        //console.log(e.detail.value)
        this.setData({//为类属性 赋值
            phone_number: e.detail.value
        })
        //console.log(this.data.phone_number)

        if(this.data.phone_number.length != 11){//简单判断一下输入
            wx.showToast({
              title: '手机号码输入错误',//带图标的最多显示7个字符，icon 为none字符就可以多一些
              icon: 'error',
              duration: 1500
            })
            return ;
        }
    },
     // 获取输入框验证码
    getCode:function(e){
        //console.log(e.detail.value)
        this.setData({//设置值
            code: e.detail.value
        })
        //console.log(this.data.code)
    },

    //登录方法
    login:function(){
        wx.request({
          url: 'http://www.hengyishun.cn/login/login',
          data:({
              phone:this.data.phone_number,
              code:this.data.code
          }),
          success(res){
              //console.log(res.data)//测试接口验证账号密码是否成功
              //账号为13812345678，密码123456

              if(res.data == 'true'){
                  wx.showToast({
                    title: '登录成功',
                    icon: 'success',
                    duration: 1500
                  });
                  wx.switchTab({//登录成功跳转到主页
                    url: '/pages/index/index',
                  })
              }
          }
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