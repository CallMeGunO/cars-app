import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Car } from "./cars";
import { RouteProp } from "@react-navigation/native";

export type StackNavigatorParamList = {
    List: undefined,
    Car: {
        car: Car,
    },
    Settings: undefined,
}

export type ScreenNavigationProp = NativeStackNavigationProp<
    StackNavigatorParamList,
    'Car'
>

export type CarScreenRouteProp = RouteProp<
    StackNavigatorParamList,
    'Car'
>;