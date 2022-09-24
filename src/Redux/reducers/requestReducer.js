import { ActionTypes } from "../constants/action-type";

const initialState = {
  requestData: [
    // {
    //   name: null,
    //   companyname: null,
    //   querytype: null,
    //   product: null,
    // },
  ],
  value: 0,
  Name: null,
  SingleNameId: null,
};

const addInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_INPUT:
      console.log("payload save Input", action.payload);
      var Data = state.requestData.concat(action.payload);
      return { ...state, requestData: Data };

    case ActionTypes.FILTER_DATA:
      console.log("payload", action.payload);
      const newData = state.requestData.filter((list) => {
        return list.status === action.payload;
      });
      console.log("newdata", newData);
      return { ...state, requestData: newData };

    case ActionTypes.TAB_CHANGE:
      console.log("payload", action.payload);
      return { ...state, value: action.payload };

    case ActionTypes.VIEW_DATA:
      console.log("payload", action.payload);
      return { ...state, Name: action.payload };

    case ActionTypes.MAIN_DATA:
      console.log("payloadMAIN_DATA", action.payload);
      return { ...state, requestData: action.payload };

    default:
      return state;
  }
};

export default addInputReducer;
