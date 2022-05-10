import axios from "axios";
import QS from 'qs';
import store from '../store/index';

//环境切换
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'localhost:8001'
}   else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = ''
}
//请求超时
axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//请求拦截
axios.interceptors.request.use(
    config => {
        const token = store.state.token;
        // token
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

//响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }  
    },
    error => {
        console.log("响应错误");
        return Promise.reject(error.response);
    }

)


export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
        .then(res => {
            resolve(res.data);
        })
        .catch(error => {
            reject(error.data);
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}