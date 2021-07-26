import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealsDetailScreen';
import { Platform } from 'react-native';
import Color from '../constants/Color';


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS == 'android' ? Color.primaryColor : ''
            },
            headerTintColor: Platform.OS == 'android' ? 'white' : Color.primaryColor

        }
    });

export default createAppContainer(MealsNavigator);