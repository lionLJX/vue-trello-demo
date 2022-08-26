// export Vue from 'vue'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    todoWait : [],
    todoDoing : [],
    todoFinish : []
}
const actions = {
    updateVal(context) {
        context.commit('UpdateVal')
    }
}
const mutations = {
    UpdateVal(state) {
        var i = 0
        var sto = window.sessionStorage
        if(sto.getItem('todoWait') == null)sto.setItem('todoWait', [])
        if(sto.getItem('todoDoing') == null)sto.setItem('todoDoing', [])
        if(sto.getItem('todoFinish') == null)sto.setItem('todoFinish', [])
        while(true) {
            if(sto.getItem('todoWait')[i] === undefined && sto.getItem('todoDoing')[i] === undefined && sto.getItem('todoFinish')[i] === undefined)return
            else {
                if(sto.getItem('todoWait')[i] != undefined)state.todoWait[i] = sto.getItem('todoWait')[i]
                if(sto.getItem('todoDoing')[i] != undefined)state.todoDoing[i] = sto.getItem('todoDoing')[i]
                if(sto.getItem('todoFinish')[i] != undefined)state.todoFinish[i] = sto.getItem('todoFinish')[i]

            }
        }
    }
}


export default new Vuex.Store({
    state,
    actions,
    mutations
})