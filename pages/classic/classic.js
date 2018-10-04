// import { HTTP } from "../../utils/http.js"
// let http = new HTTP()

import { ClassicModel } from '../../models/classic.js'
let classicModel = new ClassicModel()

import { LikeModel } from '../../models/like.js'
let likeModel = new LikeModel()

// pages/classic/classic.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        classic: null,
        first: false,
        latest: true,
        likeCount: 0,
        likeStatus: false
    },

    onLike: function (event) {
        console.log(event);
        let behavior = event.detail.behavior;
        likeModel.like(behavior, this.data.classic.id, this.data.classic.type);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        classicModel.getLatest((res) => {
            console.log(res)
            this.setData({
                classic: res,
                likeCount: res.fav_nums,
                likeStatus: res.like_status
            })
        })
        //   http.request({
        //       url: 'classic/latest',
        //       success: (res) => {
        //           console.log(res);
        //       }
        //   })
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