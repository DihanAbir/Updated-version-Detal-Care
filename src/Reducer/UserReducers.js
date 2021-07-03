import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_fAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_fAIL,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_fAIL,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_fAIL,
} from "../constant/userConstant.js";

export const userListReducer = (state = { user: [] }, action) => {
  const { type, payload } = action;
  // eslint-disable-next-line default-case
  switch (type) {
    case USER_LIST_REQUEST:
      return { loading: true, user: [] };
    case USER_LIST_SUCCESS:
      return { loading: false, user: payload };
    case USER_LIST_fAIL:
      return { loading: false, user: payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, action) => {
  const { type, payload } = action;
  // eslint-disable-next-line default-case
  switch (type) {
    case USER_DETAILS_REQUEST:
      return { loading: true, user: {} };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: payload };
    case USER_DETAILS_fAIL:
      return { loading: false, user: payload };
    default:
      return state;
  }
};

export const userCreateReducer = (state = {}, action) => {
  //   const { type } = action;
  switch (action.type) {
    case USER_ADD_REQUEST:
      return {
        loading: true,
      };

    case USER_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        newUser: action.payload,
      };

    case USER_ADD_fAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const AllUserInfo = (state = {}, action) => {
  //   const { type } = action;
  switch (action.type) {
    case USER_INFO_REQUEST:
      return {
        loading: true,
      };

    case USER_INFO_SUCCESS:
      return {
        loading: false,
        success: true,
        state: action.payload,
      };

    case USER_INFO_fAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
