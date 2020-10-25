import axios from 'axios';

export function get(url,params){
    return new Promise((rej,res)=>{
        axios.get(url,{
            params: params   
        }).then(val => {
            rej(val)
        }).catch(error => {
            res(error)
        })
    })
}