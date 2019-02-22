import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const initialState = {
  isLoggedIn: false,
  jwt: null,
  email: null
}

enum Types { AUTHORIZE = "AUTHORIZE", UNAUTHORIZE = "UNAUTHORIZE", GET_USER = "GET_USER" }

export const authorize = (data: any) => {
  console.log('auth', data);
  return {
    type: Types.AUTHORIZE,
    payload: data
  };
}

export const unauthorize = () => {
  console.log('unauth');
  return {
    type: Types.UNAUTHORIZE
  };
}

export const getuser = (data: any) => {
  console.log('get user');
  return {
    type: Types.GET_USER,
    payload: data
  };
}

export function userReducer(state = initialState, action: any): any {
  console.log("reducer state: ", state, "\naction:", action);
  switch (action.type) {
    case Types.AUTHORIZE:
      return {
        isLoggedIn: true,
        jwt: action.payload.jwt
      };

    case Types.UNAUTHORIZE:
      return {
        isLoggedIn: false,
        jwt: null,
        email: null
      };

    case Types.GET_USER:
      return {
        ...state,
        email: action.payload.email
      };

    default:
      return state;
  }
}

export const reducer = combineReducers({ user: userReducer, form: formReducer });

// types
// actions
// reducer