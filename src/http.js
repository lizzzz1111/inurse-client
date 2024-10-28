import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = '/api/'; // 给axios设置默认的url
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
    (config) => {
        const url = config.url.split('/');
        if (url[url.length] !== 'login') {
            config.headers.common.Authorization =
                'Bearer ' + localStorage.getItem('Token');
        }
        return config;
    },
    (error) => {
        // 请求错误处理
        return Promise.reject(error);
    },
);

Vue.prototype.$http = axios; // 将axios添加到Vue的原形，这样一切vue实例都可以使用该对象