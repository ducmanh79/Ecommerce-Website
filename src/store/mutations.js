export default{
    setNewProduct(state, product){
        state.orders.push(product)
        console.log(state.orders);
    }
}