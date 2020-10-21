// const redux = require('redux');
// const createStore = redux.createStore;

// const BUY_CAKE = 'BUY_CAKE';

// function buyCake() {
//     return {
//         type: BUY_CAKE,
//         info: 'First redux action'
//     }
// }

// const initialState = {
//     numOfCakes: 10
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         default: return state
//     }
// }

// const store = createStore(reducer);
// console.log('Initial state', store.getState());
// const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// unsubscribe();


import React, { useReducer } from 'react';

function Redux() {
    const initialState = {
        count: 1
    };

    function increment() {
        return {
            type: 'increment',
            message: 'Increament to one'
        }
    }

    function decrement() {
        return {
            type: 'decrement',
            message: 'Decrement to one'
        }
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'increment': return {
                ...state,
                count: state.count + 1
            }

            case 'decrement': return {
                ...state,
                count: state.count - 1
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <div>
                <button className="btn btn-primary" onClick={() => dispatch(decrement())}>-</button>
                <button className="btn btn-danger ml-3" onClick={() => dispatch(increment())}>+</button>
            </div>
        </>
    )
}

export default Redux;

