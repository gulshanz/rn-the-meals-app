export const TOGGLE_FAVORTIE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORTIE, mealId: id };
};

export const setFilters = (filterSetting) => {
  return { type: SET_FILTERS, filters: filterSetting };
};
