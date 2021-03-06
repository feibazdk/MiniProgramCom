// components/tag/index.js
Component({
    /**
     * 组件的属性列表
     */
    options: {
        multipleSlots: true
    },

    properties: {
        text: String,
        num: Number
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTag(event) {
            this.triggerEvent('tagtext', {
                text: this.properties.text
            })
        }
    }
})
