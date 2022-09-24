import { ActionTypes } from "../constants/action-type";

const saveInput = (input) => {
  console.log("saveinput", input);
  return {
    type: ActionTypes.SAVE_INPUT,
    payload: input,
  };
};

const filterData = (status) => {
  console.log("data action", status);
  return {
    type: ActionTypes.FILTER_DATA,
    payload: status,
  };
};

const tabChange = (value) => {
  console.log("data action", value);
  return {
    type: ActionTypes.TAB_CHANGE,
    payload: value,
  };
};

const viewData = (name) => {
  console.log("data action", name);
  return {
    type: ActionTypes.VIEW_DATA,
    payload: name,
  };
};

const MainData = (data) => {
  console.log("data action", data);
  return {
    type: ActionTypes.MAIN_DATA,
    payload: data,
  };
};

export { tabChange, saveInput, filterData, viewData, MainData };
