import axios from 'axios'

export function request(config){
        const instance = axios.create({
            baseURL:'http://106.54.54.237:8000',
            timeout:5000
        })

       // -----------------------------------axios拦截器的使用
        instance.interceptors.request.use(config => {
            // console.log(config);
            //1.比如config不符合服务器的要求

            //2.比如每次发送的网络请求时，都希望在界面显示一个请求的图标

            //3.某些网络请求（比如登录token），必须携带一些特殊的信息
            return config
        },err =>{
            // console.log(err)
        })
        //相应拦截
        instance.interceptors.response.use(res=>{
       
            return res.data
        },err =>{
            console.log(err)
        })
        //因为istance是生命的axios的实例，axios已经封装了promise所以直接return就可以正常使用
      return instance(config)
}  