import { createSelector } from "@reduxjs/toolkit";

const authState = (state) => state.auth;

const getUser = createSelector(
  [authState],
  (auth) => auth.user
);

const getLoading = createSelector(
  [authState],
  (auth) => auth.loading
);

const getError = createSelector(
  [authState],
  (auth) => auth.error
);

const getIsAuthenticated = createSelector(
  [authState],
  (auth) => auth.isAuthenticated
);


export {
  getUser,
  getLoading,
  getError,
  getIsAuthenticated,
};
