// const {createStore} = require("redux")

// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

// // state
// const initialCounterState={
//     count: 0
// }

// // action
// const incrementCounter=()=>{
//     return{
//         type: INCREMENT
//     }
// }

// const decrementCounter=()=>{
//     return{
//         type: DECREMENT
//     }
// }

// const resetCounter=()=>{
//     return{
//         type: RESET
//     }
// }
// const incrementByValueCounter=(value)=>{
//     return{
//         type: INCREMENT_BY_VALUE,
//         payload: value
//     }
// }

// // REDUCER
// const counterReducer=(state=initialCounterState, action)=>{
//     switch (action.type) {
//         case INCREMENT:
//             return{
//                 ...state,
//                 count: state.count + 1
//             }
            
//         case DECREMENT:
//             return{
//                 ...state,
//                 count: state.count - 1
//             }        
    
//         case RESET:
//             return{
//                 ...state,
//                 count: 0
//             }        
//         case INCREMENT_BY_VALUE:
//             return{
//                 ...state,
//                 count: state.count + action.payload
//             }        
    
//         default:
//             state;
//     }
// }

// // store
// const store = createStore(counterReducer);

// store.subscribe(()=>{
//     console.log(store.getState());
// })

// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(resetCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(incrementByValueCounter(5));


const { createStore } = require("redux");
// Multiple reducer

// productReducer

//step-0: CONSTANTS
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//step-1: initial state
const initialProductState = {
    products: ["sugar", "salt"],
    numberofProducts: 2,
}


//step-2: action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}

//step-3: reudcer
const userReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }

        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                numberofProducts : state.numberofProducts + 1,
            }

        default:
            state;
    }
}

// store:
const store = createStore(userReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProducts("Emon"))



// cart reducer


