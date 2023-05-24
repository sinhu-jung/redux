export interface testState {
    a: string;
    b: string;
    c: string
    d: number;
  }

  export enum testType {
    A_CHANGE = "A_CHANGE",
    B_CHANGE = "B_CHANGE",
    C_CHANGE = "C_CHANGE",
    D_CHANGE = "D_CHANGE"
  }
  
  export type ActionType = {
    type: testType.A_CHANGE | testType.B_CHANGE | testType.C_CHANGE | testType.D_CHANGE;
    payload: string;
  }

  export const initTestState = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 2
  }

  const actionFunc: { [key: string]: Function } = {
    A_CHANGE: (state: testState, payload: string) => {
        state.a = payload
        return state;
    },
    B_CHANGE: (state: testState, payload: string) => {
        state.a = payload
        return state;
    },
    C_CHANGE: (state: testState, payload: string) => {
        state.a = payload
        return state;
    },
    D_CHANGE: (state: testState, payload: string) => {
        state.a = payload
        return state;
    },
  }

  export const testReducer: (
    state: testState,
    action: ActionType
  ) => testState = (state: testState, action: ActionType) => {
    const newState = { ...state };
    actionFunc[action.type](newState, action.payload);
    return newState;
  };