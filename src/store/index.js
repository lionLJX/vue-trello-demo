// export Vue from 'vue'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    todoWait : [],
    todoDoing : [],
    todoFinish : [],
    todoRecovery : []
    // moveTitle : ''
}
const actions = {
    // 更新本地存储中的数据
    updateVal(context) {
        context.commit('UpdateVal')
    },
    getRecovery(context) {
        context.commit('GetRecovery')
    }
    // 添加数据并实现移动卡片到其他分组
    // moveTo(context, title) {
    //     context.commit('MoveTo', todoWhich)
    // }
}
const mutations = {
    UpdateVal(state) {
        var i = 0
        var sto = window.localStorage
        var todoD = []
        var todoF = []
        var todoW = []
        // wait
        if(sto.getItem('todoWait') == null) sto.setItem('todoWait', [])
        if(sto.getItem('todoWait') != '') 
        todoW = JSON.parse(sto.getItem('todoWait'))

        //doing
        if(sto.getItem('todoDoing') == null)sto.setItem('todoDoing', [])
        if(sto.getItem('todoDoing') != '')
        todoD = JSON.parse(sto.getItem('todoDoing'))

        //finish
        if(sto.getItem('todoFinish') == null)sto.setItem('todoFinish', [])
        if(sto.getItem('todoFinish') != '')
        todoF = JSON.parse(sto.getItem('todoFinish'))


        while(true) {
            if(todoW[i] === undefined && todoD[i] === undefined && todoF[i] === undefined)break
            else {
                if(todoW[i] != undefined)state.todoWait[i] = todoW[i]
                if(todoD[i] != undefined)state.todoDoing[i] = todoD[i]
                if(todoF[i] != undefined)state.todoFinish[i] = todoF[i]

            }
            i++;
        }
    },
    // MoveTo(state, title) {
    //     state.moveTitle = title
    // }
    GetRecovery(state) {
        var i = 0
        var sto = window.localStorage
        var todoR = []
        if(sto.getItem('todoRecovery') == null)sto.setItem('todoRecovery', [])
        if(sto.getItem('todoRecovery') != '')
        todoR = JSON.parse(sto.getItem('todoRecovery'))
        while(true) {
            if(todoR[i] === undefined)break
            else {
                if(todoR[i] != undefined)state.todoRecovery[i] = todoR[i]
            }
            i++;
        }
    }
}


export default new Vuex.Store({
    state,
    actions,
    mutations
})