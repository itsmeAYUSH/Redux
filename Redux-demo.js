const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "incrementByValue") {
    return { counter: state.counter + action.value };
  }
  if (action.type === "decrementByValue") {
    return { counter: state.counter - action.value };
  }
  return state;
};

const store = redux.createStore(counterReducer);

// console.log(store.getState());d

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);

store.dispatch({ type: "incrementByValue",value:3 });
store.dispatch({ type: "incrementByValue",value:3  });
store.dispatch({ type: "incrementByValue" ,value:3 });
store.dispatch({ type: "decrementByValue" ,value:3 });
store.dispatch({ type: "decrementByValue" ,value:3 });
