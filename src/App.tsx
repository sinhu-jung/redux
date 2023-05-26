import Test from "./Test";
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

function update() {
  console.log("update function called!: ", store.getState());
}

export const store = createStore(reducer);

store.subscribe(update);

function App() {
  return <Test />;
}

export default App;
