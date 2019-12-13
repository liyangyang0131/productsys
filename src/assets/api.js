import axios from 'axios';
import config from '../../configure.json'
import router from '../router/router'

axios.defaults.timeout = 60000;  // 超时时间为60秒
axios.defaults.baseURL =''+config.baseUrl;


//http request 拦截器
axios.interceptors.request.use(
    config => {  // 在发送请求之前做些什么

        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        // config.data = JSON.stringify(config.data);

        config.headers = {
            // 'Content-Type':'application/x-www-form-urlencoded'
            'Content-Type':'application/json'
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        /*if(response.data.errCode ==2){
            router.push({
                path:"/login",
                query:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
            })
        }*/
        if(response.data.code === 401){  //401 session失效或没有
            router.push({
                path:"/login",
                query:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)

export default axios;

