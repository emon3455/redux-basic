// const {createStore} = require("redux")

// const { default: axios } = require("axios");
// const { createStore } = require("redux");

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


// --------------------multiple reducer-------------------------
// const { createStore, combineReducers } = require("redux");
// // Multiple reducer

// // productReducer

// //step-0: products CONSTANTS
// const GET_PRODUCTS = "GET_PRODUCTS";
// const ADD_PRODUCTS = "ADD_PRODUCTS";

// //step-0: carts CONSTANTS
// const GET_CART_ITEMS = "GET_CART_ITEMS";
// const ADD_CART_ITEM = "ADD_CART_ITEM";

// //step-1: initial state
// const initialProductState = {
//     products: ["sugar", "salt"],
//     numberofProducts: 2,
// }
// //step-1: initial state
// const initialCartState = {
//     cart: ["salt"],
//     numberofProducts: 1,
// }


// //step-2: action
// const getProducts = () => {
//     return {
//         type: GET_PRODUCTS
//     }
// }

// const addProducts = (product) => {
//     return {
//         type: ADD_PRODUCTS,
//         payload: product
//     }
// }

// //step-2: action
// const getCart = () => {
//     return {
//         type: GET_CART_ITEMS
//     }
// }

// const addCart = (product) => {
//     return {
//         type: ADD_CART_ITEM,
//         payload: product
//     }
// }

// //step-3: products reudcer
// const productsReducer = (state = initialProductState, action) => {
//     switch (action.type) {
//         case GET_PRODUCTS:
//             return {
//                 ...state
//             }

//         case ADD_PRODUCTS:
//             return {
//                 products: [...state.products, action.payload],
//                 numberofProducts : state.numberofProducts + 1,
//             }

//         default:
//          return  state;
//     }
// }

// //step-3: cart reudcer
// const cartReducer = (state = initialCartState, action) => {
//     switch (action.type) {
//         case GET_CART_ITEMS:
//             return {
//                 ...state
//             }

//         case ADD_CART_ITEM:
//             return {
//                 cart: [...state.cart, action.payload],
//                 numberofProducts : state.numberofProducts + 1,
//             }

//         default:
//           return  state;
//     }
// }

// // combining multiple reducer:
// const rootReducer = combineReducers({
//     productsR: productsReducer,
//     cartR: cartReducer
// })

// // store:
// const store = createStore(rootReducer);

// store.subscribe(()=>{
//     console.log(store.getState());
// })

// store.dispatch(getProducts());
// store.dispatch(addProducts("Emon"))
// store.dispatch(getProducts());
// store.dispatch(addProducts("Elina"))

// store.dispatch(getCart());
// store.dispatch(addCart("pen"))
// store.dispatch(getCart());
// store.dispatch(addCart("Elina"))




// // ------------------middleware--------------------------
// const { createStore, applyMiddleware } = require("redux");
// const { default: logger } = require("redux-logger");

// // products

// //step-0: products CONSTANTS
// const GET_PRODUCTS = "GET_PRODUCTS";
// const ADD_PRODUCTS = "ADD_PRODUCTS";

// //step-1: initial state
// const initialProductState = {
//     products: ["sugar", "salt"],
//     numberofProducts: 2,
// }


// //step-2: action
// const getProducts = () => {
//     return {
//         type: GET_PRODUCTS
//     }
// }

// const addProducts = (product) => {
//     return {
//         type: ADD_PRODUCTS,
//         payload: product
//     }
// }


// //step-3: products reudcer
// const productsReducer = (state = initialProductState, action) => {
//     switch (action.type) {
//         case GET_PRODUCTS:
//             return {
//                 ...state
//             }

//         case ADD_PRODUCTS:
//             return {
//                 products: [...state.products, action.payload],
//                 numberofProducts : state.numberofProducts + 1,
//             }

//         default:
//          return  state;
//     }
// }


// // store:
// const store = createStore(productsReducer, applyMiddleware(logger));

// store.subscribe(()=>{
//     console.log(store.getState());
// })

// store.dispatch(getProducts());
// store.dispatch(addProducts("Emon"))
// store.dispatch(addProducts("Elina"))


// ------------------ redux thunk and data fetching ---------------

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// constant
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED  = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos"


// initial state
const initialTodosState={
    todos: [],
    isLoading: false,
    error: null,
}

// action
const getTodosRequest=()=>{
    return{
        type: GET_TODOS_REQUEST
    };
};

const getTodosfailed=(error)=>{
    return{
        type: GET_TODOS_FAILED,
        payload: error
    }
}

const getTodosSuccess=(todos)=>{
    return{
        type: GET_TODOS_SUCCESS,
        payload: todos, 
    }
}

// function

// reducer
const todosreducer = (state=initialTodosState, action)=>{
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case GET_TODOS_FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
    
        default:
            return state
    }
}

// async action creator
const fetchData=()=>{
    return (dispatch)=>{
        dispatch(getTodosRequest());
        axios
        .get(API_URL)
        .then(res=> {
            const todos = res.data;
            const titles = todos.map(todo=> todo.title);
            dispatch(getTodosSuccess(titles))
        })
        .catch(er=>{
            const errorMessage = er.message;
            dispatch(getTodosfailed(errorMessage))
        })
    }
}

// store
const store = createStore(todosreducer, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
});


store.dispatch(fetchData());