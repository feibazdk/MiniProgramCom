// components/classic/music/index.js
import { classicBeh } from "../classic-beh.js"

Component({
    /**
     * 组件的属性列表
     */
    behaviors: [classicBeh],
    properties: {
        // img: String,
        // content: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        pauseSrc: 'images/player@waitting.png',
        playSrc: 'images/player@playing.png'
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
