import { View, Text, Switch, Button } from 'react-native'
import { useEffect, useState, useContext } from 'react'
import cars from '../../../cars-data.json'
import CarList from '../../components/CarList/CarList'
import { Car, CarType } from '../../types/cars'
import { StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import CarMap from '../../components/CarMap/CarMap'
import LocalizationContext from '../../core/contexts/LocalizationContext'
import { ScreenNavigationProp } from '../../types/navigation'
import { useNavigation } from '@react-navigation/native'

export default function ListScreen() {
    // all cars get from json file
    const allCars = cars as Car[]

    const navigation = useNavigation<ScreenNavigationProp>()

    const { localization } = useContext(LocalizationContext)
    // cars that should be displayed
    const [currentCars, setCurrentCars] = useState<Car[]>(allCars)
    // display mode list or car
    const [isMapDisplayed, setIsMapDisplayed] = useState<boolean>(false)
    // car type that should be displayed
    const [dropdownValue, setDropdownValue] = useState<string>(CarType.CARGO)
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

    const toggleIsMapDisplayed = () => {
        setIsMapDisplayed((prev) => !prev)
    }

    const handleSettingsButtonClick = () => {
        navigation.navigate('Settings')
    }

    useEffect(() => {
        const newCars = allCars.filter((car) => {
            return car.type === dropdownValue
        })
        setCurrentCars(newCars)
    }, [dropdownValue])

    return (
        <View style={styles.container}>
            <View style={styles.actionPanel}>
                <View style={styles.toggler}>
                    <Text>{localization.strings.displayMap}</Text>
                    <Switch value={isMapDisplayed} onValueChange={toggleIsMapDisplayed} />
                </View>
                <Button onPress={handleSettingsButtonClick} title={localization.strings.settings} />
            </View>
            <DropDownPicker
                multiple={false}
                value={dropdownValue}
                setValue={setDropdownValue}
                open={isDropdownOpen}
                setOpen={setIsDropdownOpen}
                items={[
                    { label: localization.strings.cargo, value: CarType.CARGO },
                    { label: localization.strings.passenger, value: CarType.PASSENGER },
                    { label: localization.strings.special, value: CarType.SPECIAL },
                ]}
                containerStyle={{ zIndex: 10 }}
            />
            <View style={styles.content}>{isMapDisplayed ? <CarMap cars={currentCars} /> : <CarList cars={currentCars} />}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    actionPanel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    toggler: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    content: {
        paddingTop: 10,
    },
})
