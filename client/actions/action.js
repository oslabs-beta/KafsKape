import * as types from "../constants/actionTypes.js";

export const addPortAction = (userPort) => {
  return {
    type: types.ADD_PORT,
    payload: userPort,
  };
};

export const addConnectionTimeAction = (timestamp) => {
  return {
    type: types.ADD_CONNECTION_TIME,
    payload: timestamp,
  };
};

export const portErrorAction = (error) => {
  return {
    type: types.PORT_ERROR,
    payload: error,
  };
};

export const updateDataAction = (data) => {
  return {
    type: types.UPDATE_DATA,
    payload: data,
  };
};