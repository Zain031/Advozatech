import {$fetch} from 'ofetch';
import {$info} from '@/info';
export function useApi(){
    const api = $fetch.create({
        baseURL:$info.baseApiUrl,
        headers:{
            Accept:'application/json',
        },
        onResponseError:({request,response,error})=>{
            return Promise.reject(error);
        },
    })

    const request = (method:string, url:string, options?:object)=>{
        return api(url,{
            method,
            ...options,
        });
    }

    return {
        get(url: string, params?: object, options?:object) {
            console.log('get',url,params,options);
            return request('GET',url,{params,...options});
        },
        post(url: string, body: object, options?:object){
            return request('POST',url,{body,...options});
        },
        put(url: string, body: object, params?:object, options?:object){
            return request('PUT',url,{body,params,...options});
        },
        delete(url: string, params?: object, options?:object){
            return request('DELETE',url,{params,...options});
        },
    }
}