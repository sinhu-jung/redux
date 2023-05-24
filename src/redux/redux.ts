export interface ActionTypes {
  type: string;
  payload?: object;
}

export function createStore(reducer: Function) {
  let state = {
    test: 10,
  };

  const listeners: any[] = [];

  const dispatch = (action: ActionTypes) => {
    state = reducer(state, action);
    listeners.forEach((fn) => fn());
  };
  const getState = () => ({ ...state });
  const subscribe = (fn: any) => listeners.push(fn);
  return {
    getState,
    dispatch,
    subscribe,
  };
}
