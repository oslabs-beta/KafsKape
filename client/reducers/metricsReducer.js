import * as types from "../constants/actionTypes.js";

const initialState = {
  connectionTime: "",
  port: "",
  portError: false,
  data: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PORT:
      return {
        ...state,
        port: action.payload,
      };
    case types.ADD_CONNECTION_TIME:
      return {
        ...state,
        connectionTime: action.payload,
      };
    case types.PORT_ERROR:
      return {
        ...state,
        portError: action.payload,
      };
    case types.UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;