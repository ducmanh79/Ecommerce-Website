export default{
    setNewProduct(state, product){
        state.orders.push(product)
    },
    clearOrders(state){
        state.orders = [{title: null, price: null, color: null, memory: null, thumbnail: null}]
    }
}