import fetch from '@/utils'

export function XiaoSh(data){
    return fetch.post(
        '/api/list', 
        data
    )
}


export function AllCapth(data){
    return fetch.post(
        '/api/all_capth', 
        data
    )
}

export function capterInfos(data){
    return fetch.post(
        '/api/capter_infos', 
        data
    )
}