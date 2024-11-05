// 路由守卫
import router from './router';
import axios from 'axios';
import store from './store';
// 白名单
const whiteList = ['/login', '/register'];
router.beforeEach((to, from, next) => {
    if (localStorage.getItem('Token')) {
        if (to.path === '/login') {
            next({
                path: '/',
            });
        } else {
            Promise.all([getUserInfo()]).then((res) => {
                console.log(res);
                store.commit('user/SET_IMG', res[0].data.img);
                store.commit('user/SET_USERID', res[0].data.id);
                store.commit('user/SET_NACKNAME', res[0].data.nackname);
                store.commit('user/SET_ADDRESS', res[0].data.address);
                store.commit('user/SET_AGE', res[0].data.age);
                store.commit('user/SET_SEX', res[0].data.sex);
                store.commit('user/SET_EMAIL', res[0].data.email);
                store.commit('user/SET_ROLE', res[0].data.role);

                next();
            });
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/login');
        }
    }
    function getUserInfo() {
        // console.log('dddssaasff')
        return axios({
            url: '/getUserInfo', // 请求地址
            method: 'get', // 设置请求方式
        });
    }
});