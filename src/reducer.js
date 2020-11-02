
const INITIAL_STATE = {
    code: null
  };
  
  export const playGroundData = function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case "CODE":
        return {
            ...state,
            code: action.data
        };
      default:
        return {...state};
    }
  };