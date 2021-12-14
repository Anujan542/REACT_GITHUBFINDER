export const GithubReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "GET_REPOS":
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        loading: false,
      };

    default:
      return state;
  }
};
