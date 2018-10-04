import { config } from '../config.js';

const tips = {
    1: '程序被狗狗叼走啦',
    1005: 'appkey 无效，请重新输入'
}

class HTTP {
    request(params) {
        if(!params.method) {
            params.method = "GET"
        }

        wx.request({
            url: config.api_base_url + params.url,
            method: params.method,
            data: params.data,
            header: {
                'content-type': 'application/json',
                'appkey': config.header.appkey
            },
            success: (res) => {
                let code = res.statusCode.toString();
                if (code.startsWith('2')) {
                    params.success && params.success(res.data);
                } else {
                    let error_code = res.data.error_code;
                    this._showerrs(error_code);
                }
            },
            fail: (err) => {}
        })
    }

    // 错误信息弹框
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