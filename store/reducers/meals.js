import { MEALS } from "../../data/dummy-data";
const intitialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = intitialState, action) => {
  return state;
};

export default mealsReducer;
