import axios from "axios";
import QS from 'qs';
import store from '../store/index';

//环境切换
let request = axios.create({
    baseURL: "/api",
    timeout: 10000,
    
})

request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//请求拦截
request.interceptors.request.use(
    config => {
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

export default request;

// export async function get(url, params) {
//     try {
//         const res = await axios.get(url, {
//             params: params
//         });
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

// export function post(url, params) {
//     return axios.post(url, QS.stringify(params))
//         .then(res => {
//             console.log(res);
//         })
//         .catch(err =>{
//             console.log(err)
//         })
// }