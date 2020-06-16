import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  GET_USER,
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS,
} from "../types";
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUser = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=0fbab8e9eaf8afb42009
    & client_secret=b41a85735d78c7642f949282712e225d4296aacf`);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  const clearUser = () => dispatch({ type: CLEAR_USERS });

  const getUser = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=0fbab8e9eaf8afb42009
    & client_secret=b41a85735d78c7642f949282712e225d4296aacf`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=0fbab8e9eaf8afb42009
    & client_secret=b41a85735d78c7642f949282712e225d4296aacf`);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
    // setRepos(res.data);
    // setLoading(false);
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUser,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
