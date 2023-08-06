const {createStore} = require("redux")

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
// state
const initialCounterState={
    count: 0,
    user: ""
}
// action
const incrementCounter=()=>{
    return{
        type: INCREMENT
    }
}
const decrementCounter=()=>{
    return{
        type: DECREMENT
    }
}
// create reducer for counter:
const counterReducer=(state=initialCounterState, action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }
    
        default:
            return state;
    }
}


// create store:
const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())