const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment by 2") {
    return { counter: state.counter + 2 };
  }
  if (action.type === "decrement by 2") {
    return { counter: state.counter - 2 };
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

store.dispatch({ type: "increment by 2" });
store.dispatch({ type: "increment by 2" });
store.dispatch({ type: "increment by 2" });
store.dispatch({ type: "decrement by 2" });
store.dispatch({ type: "decrement by 2" });
