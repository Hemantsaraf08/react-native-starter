import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import JSXExercise from './src/screens/JSXExercise';
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenReducer from "./src/screens/SquareScreenReducer";
import InputText from "./src/screens/InputText";
import BoxScreen from "./src/screens/BoxScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Exersice: JSXExercise,
    List: ListScreen,
    ImageScreen: ImageScreen,
    Counter: Counter,
    ColorScreen:ColorScreen,
    SquareScreen:SquareScreen,
    SquareScreenReducer:SquareScreenReducer,
    InputText:InputText,
    BoxScreen:BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
