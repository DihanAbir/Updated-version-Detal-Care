import axios from "axios";

import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_fAIL,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_fAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_fAIL,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_fAIL,
} from "../constant/userConstant.js";

export const UserList = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await axios.get(
      "https://dental-finalbackend.herokuapp.com/api/v1/user/"
    );
    // console.log(`data from user list `, data.data);

    dispatch({ type: USER_LIST_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: USER_LIST_fAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserDetails = (userId) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://dental-finalbackend.herokuapp.com/api/v1/user/profile/${userId}`
    );
    // console.log(`data from user DETAILS `, data.data);

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_fAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_ADD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `https://dental-finalbackend.herokuapp.com/api/v1/user/addPatient`,
      user,
      config
    );
    console.log(`data`, data);
    dispatch({ type: USER_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_ADD_fAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const alluserInfo = (disID) => async (dispatch) => {
  try {
    dispatch({
      type: USER_INFO_REQUEST,
    });

    const { data } = await axios.get(
      `https://dental-finalbackend.herokuapp.com/api/v1/disease/${disID}`
    );

    // const { data2 } = await axios.get(`/api/v1/user/${data1.data.userid}`);
    // const { data3 } = await axios.get(`/api/v1/days/${disID}`);
    // const data = { ...data1, ...data2, ...data3 };

    dispatch({ type: USER_INFO_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: USER_INFO_fAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
