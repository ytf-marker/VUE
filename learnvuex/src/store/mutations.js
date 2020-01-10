
import {
    INCREMENT,
    DECREMENT,
    INCREMENTCOUNT
 }from './mutation-types'
 export default {  
    ['INCREMENT'](state){
        state.counter++
    },
    ['DECREMENT'](state){
        state.counter--
    },
    ['INCREMENTCOUNT'](state,count){
        state.counter+=count.count
    },
    ['CHANGEINFO'](state){
         
        // state.info={name:'奔驰',price:'6000'} 
        //给对象增加属性   
        Vue.set(state.info,'address','中国');
        //删除对象中的属性、
        Vue.delete(state.info,'price')
    },

}