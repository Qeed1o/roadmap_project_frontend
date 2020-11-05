import { createSelector } from "reselect";

export const rootSelector = (store) => store;
export const tasksSelector = createSelector(
  rootSelector,
  (store) => store.tasks
);

export const selectSearchValue = createSelector(
  rootSelector,
  (store) => store.searchValue
);
