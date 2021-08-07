import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORTIE } from "../actions/meals";
const intitialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = intitialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORTIE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFiltes = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFiltes.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFiltes.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFiltes.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFiltes.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
