// components/search/index.js

import { KeywordModel } from '../../models/keyword.js'
let keywordModel = new KeywordModel()

import { BookModel } from '../../models/book.js'
let bookModel = new BookModel()

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        historyWords: [],
        hotwordsList: [],
        dataArray: [],
        searching: false,
        searchValue: ''
    },
    attached(){
        // const historyWords = keywordModel.getHistory(); 
        // const hotwords = keywordModel.getHot(); 
        this.setData({
            historyWords: keywordModel.getHistory()
        })

        keywordModel.getHot().then(res => {
            this.setData({
                hotwordsList: res.hot
            })
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onCancel(event) {
            this.triggerEvent('cancel', {}, {})
        },

        onDelete(event) {
            this.setData({
                searching: false
            })
        },

        onConfirm(event) {

            this.setData({
                searching: true
            })

            const word = event.detail.value || event.detail.text

            // const q = event.detail.value
            bookModel.search(0, word).then(res => {
                this.setData({
                    dataArray: res.books
                })

                keywordModel.addToHistory(word)
            })
            
        }
    }
})
