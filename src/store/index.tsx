const initialState = {
  isLoggedIn: false,
  jwt: null,
  email: null
}

enum Types { AUTHORIZE = "AUTHORIZE", UNAUTHORIZE = "UNAUTHORIZE", GET_USER = "GET_USER" }

export const authorize = (data: any) => {
  console.log(data);
  return {
    type: Types.AUTHORIZE,
    payload: data
  };
}

export function reducer(state = initialState, action: any): any {
  console.log("reducer state: ", state, " action:", action);
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
        email: action.email
      };

    default:
      return state;
  }
}

// types
// actions
// reducer