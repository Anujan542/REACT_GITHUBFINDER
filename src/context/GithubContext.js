import React, { createContext, useReducer } from "react";
import axios from "axios";
import { GithubReducer } from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  /// search users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const { data } = await axios.get(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`
    );

    dispatch({
      type: "GET_ALL_USERS",
      payload: data.items,
    });
  };

  /// single user profile
  const getSingleUser = async (login) => {
    setLoading();

    const { data } = await axios.get(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}`
    );

    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  /// get user repos
  const getUserRepos = async (login) => {
    setLoading();

    const { data } = await axios.get(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`
    );

    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getSingleUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
