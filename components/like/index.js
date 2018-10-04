// components/like/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        like: {
            type: Boolean
        },
        count: {
            type: Number
        }
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
        onLike(event) {
            let count = this.properties.count;
            let like = this.properties.like;

            count = like ? count - 1 : count + 1;

            this.setData({
                count: count,
                like: !like
            })

            // 激活事件
            let behavior = this.properties.like ? 'like' : 'cancel';
            this.triggerEvent('like', {
                behavior: behavior
            }, {})
        }
    }
})
