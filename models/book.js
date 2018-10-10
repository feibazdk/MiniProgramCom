import { HTTP } from '../utils/http-p.js'

class BookModel extends HTTP {
    getHotList() {
        return this.request({
            url: 'book/hot_list',
            data: {
                name: '1',
                age: 18
            },
            methods: 'POST'
        })
    }

    getDetail(bid) {
        return this.request({
            url: `book/${bid}/detail`
        })
    }

    getLikeStatus(bid) {
        return this.request({
            url: `/book/${bid}/favor`
        })
    }

    getComments(bid) {
        return this.request({
            url: `book/${bid}/short_comment`
        })
    }

    postComponent(bid, comment) {
        return this.request({
            url: 'book/add/short_comment',
            method: 'post',
            data: {
                book_id: bid,
                content: comment
            }
        })
    }
}

export { BookModel }