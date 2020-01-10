import Vuex from 'vuex'
import Vue from 'vue'
import {
    INCREMENT,
    DECREMENT,
    INCREMENTCOUNT
 }from './mutation-types'

//1. 安装插件
Vue.use(Vuex)

//2.创建对象
const moduleA={
    state:{
        name:'张三',
    },
    mutations:{
        UPDataname(state){
            state.name="李四"
        }
    }
}   
const store = new Vuex.Store({
    //定义变量
    state:{
        counter:1000,
        student:[
            {name:"张三",age:10},
            {name:"李四",age:15},
            {name:"王五",age:24},
        ],
        info:{name:'宝马',price:'5000'}
    },
    //定义方法
    mutations:{  
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

    },
    actions:{
        uPdatainfo(context){
            setTimeout(()=>{
               context.commit('CHANGEINFO');
            },1000)
        }
    },
    getters:{ 
        poertCounter(state){
            return state.counter * state.counter 
        },
        more20stu(state){
            return state.student.filter(s => {
                return s.age>20
            })
        },
        more20stulength(state,getters){
            return getters.more20stu.length
        },
        moreAge(state){
            return (age)=>{
                return state.student.filter(s => {
                    return s.age>age 
                }) 
            }
        }
    },
    modules:{
        A:moduleA
    }
})
//导出store
export default store