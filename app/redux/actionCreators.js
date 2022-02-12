import * as actionTypes from "./actionTypes";

export const loadPlants = (plants) => {
  return {
    type: actionTypes.LOAD_PLANTS,
    payload: plants,
  };
};

export const getPlants = (dispatch) => {
  return {
    type: actionTypes.LOAD_PLANTS,
    payload: plants,
  };
};
