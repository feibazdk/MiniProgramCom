import { config } from '../config.js';

const tips = {
    1: '程序被狗狗叼走啦',
    1005: 'appkey 无效，请重新输入'
}

class HTTP {
    request({ url, data = {}, method = 'GET' }) {
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method)
        })
    }

    _request(url, resolve, reject, data = {}, method = 'GET') {
        wx.request({
            url: config.api_base_url + url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/json',
                'appkey': config.header.appkey
            },
            success: (res) => {
                let code = res.statusCode.toString();
                if (code.startsWith('2')) {
                    // console.log(res);
                    // params.success && params.success(res.data);
                    resolve(res.data)
                } else {
                    reject()
                    let error_code = res.data.error_code;
                    this._showerrs(error_code);
                }
            },
            fail: (err) => {
                reject();
                this._showerrs(error_code);
            }
        })
    }

    _showerrs(error_code) {
        if (!error_code) {
            error_code = 1;
        }

        const tip = tips[error_code];

        wx.showToast({
            title: tip ? tip : tip[1],
            icon: 'none',
            duration: 2000
        })
    }
}

export { HTTP }