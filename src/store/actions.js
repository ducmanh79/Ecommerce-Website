// import state from './state'
export default{
    createProduct({commit}, task){
        commit('setNewProduct', {title: task.title, price: task.price, color: task.color, memory: task.memory, thumbnail: task.thumbnail,
        quantity: task.quantity})
    }
}