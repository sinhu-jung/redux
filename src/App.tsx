import { ActionTypes, createStore } from "./redux/redux";

function reducer(state: { test: number }, action: ActionTypes) {
  if (action.type === "next") {
    return {
      ...state,
      test: state.test ? state.test + 1 : 10,
    };
  }
  return state;
}

function App() {
  function update() {
    console.log("update function called!: ", store.getState());
  }

  const store = createStore(reducer);
  store.subscribe(update);

  console.log(store.getState());
  store.dispatch({ type: "next" });
  store.dispatch({ type: "next" });
  console.log(store.getState());
  store.dispatch({ type: "next" });

  return <></>;
}

export default App;
