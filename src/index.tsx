import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackNavigatorParamList } from './types/navigation'
import ListScreen from './screens/ListScreen/ListScreen'
import CarScreen from './screens/CarScreen/CarScreen'
import LocalizationContext from './core/contexts/LocalizationContext'
import SettingsScreen from './screens/SettingsScreen/SettingsScreen'
import Localization from './localization'
import { useState } from 'react'

export default function CarTracker() {
    // Initial localization state
    const [localization, setLocalization] = useState(new Localization('ru'))
    // Used Stack navigation
    const Stack = createNativeStackNavigator<StackNavigatorParamList>()
    return (
        <LocalizationContext.Provider value={{ localization: localization, setLocalization: setLocalization }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="List">
                    <Stack.Screen options={{ title: localization.strings.vehicles }} name="List" component={ListScreen} />
                    <Stack.Screen options={{ title: localization.strings.vehicle }} name="Car" component={CarScreen} />
                    <Stack.Screen options={{ title: localization.strings.settings }} name="Settings" component={SettingsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </LocalizationContext.Provider>
    )
}
