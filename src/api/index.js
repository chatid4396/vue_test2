import {get, post} from "./request";

export const Test = () => {
    return get({
        url: '/test',
    })
}