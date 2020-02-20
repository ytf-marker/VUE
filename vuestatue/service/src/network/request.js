import axios from 'axios'

export function request(config){

        const instance = axios.create({
            baseURL:'http://106.54.54.237:8000',
            timeout:5000
        })
        //因为istance是生命的axios的实例，axios已经封装了promise所以直接return就可以正常使用
      return instance(config)

}