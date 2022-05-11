import request from "./request";

//设置接口
export const test = (str) => request.get(`/test/${str}`)
export const testPost = (params) => request.post('/testPost', params)