import axios from "axios";
import QS from 'qs';
import store from '../store/index';

//环境切换
let request = axios.create();
request.defaults.baseURL = "/api/"
request.defaults.timeout = 10000
request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//请求拦截
request.interceptors.request.use(
    config => {      
        console.log(config.url)  
        //post 参数序列化
        if (config.method.toLowerCase() == "post") {
            config.data = QS.stringify(config.data);
        }
        // const token = store.state.token;
        // token
        return config;
    }
)

//响应拦截器
request.interceptors.response.use(
    response => {
        return response.data
        // if (response.status === 200) {            
            // return Promise.resolve(response);        
        // } else {            
            // return Promise.reject(response);        
        // }  
    },
    error => {
        console.log("响应错误");
    }

)

export default request
