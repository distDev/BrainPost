
export interface IState {
  user: any;
  isFetching: boolean;
  error: boolean;
}
interface IAction {
  type: string;
  payload: null | {};
}

export const Reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case 'LOGIN_FAIL':
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case 'LOGOUT':
      return {
        user: null,
        isFetching: false,
        error: false,
      };
  }
};