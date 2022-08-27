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
    }
}


export default new Vuex.Store({
    state,
    actions,
    mutations
})