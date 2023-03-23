import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName(state){
        },
        increase(state, action){
            state.age += action.payload
        },
    }
})


let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        상품증가(state, action){
            state[action.payload].count++
        },
    }
})
export let { changeName, increase, 상품증가 } = cart.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 