import { IRequestsNestedState } from './requests/requests.interface';

export const requestInitialState: IRequestsNestedState = {
  loading: false,
  loaded: false,
  status: '',
  data: null,
};

export const requestLoadingState: IRequestsNestedState = {
  loading: true,
  loaded: false,
  status: '',
  data: null,
};

export const requestSuccessState = (payload): IRequestsNestedState => {
  return {
    loading: false,
    loaded: true,
    status: 'success',
    data: payload,
  };
};

export const requestFailState = (payload): IRequestsNestedState => {
  return {
    loading: false,
    loaded: true,
    status: 'fail',
    data: payload,
  };
};
