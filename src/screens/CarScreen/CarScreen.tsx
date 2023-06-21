import { useContext } from 'react'
import { View, Text, Button, Linking, Platform } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { CarScreenRouteProp } from '../../types/navigation'
import CarMap from '../../components/CarMap/CarMap'
import { StyleSheet } from 'react-native'
import LocalizationContext from '../../core/contexts/LocalizationContext'

export default function CarScreen() {
    const { localization } = useContext(LocalizationContext)

    // get car from routing props
    const route = useRoute<CarScreenRouteProp>()

    const car = route.params.car
    const message = localization.strings.message
    // check platform, to add or not + at the start of phone number
    const platformAdoptedPhoneNumber = Platform.OS == 'ios' ? car.phoneNumber : `+${car.phoneNumber}`
    return (
        <View style={styles.container}>
            <Text>
                {localization.strings.carType}: {car.type}
            </Text>
            <Text>
                {localization.strings.driverName}: {car.driverName}
            </Text>
            <Text>
                {localization.strings.phoneNumber}: +{car.phoneNumber}
            </Text>
            <Button
                title={localization.strings.call}
                onPress={() => {
                    Linking.openURL(`tel:${platformAdoptedPhoneNumber}`)
                }}
            />
            <Button
                title={localization.strings.write}
                onPress={() => {
                    Linking.openURL(`whatsapp://send?text=${message}&phone=${platformAdoptedPhoneNumber}`).catch(() => {
                        alert(localization.strings.whatsappAlert)
                    })
                }}
            />
            <CarMap
                cars={[car]}
                region={{ latitude: car.lattitude, longitude: car.longitude, latitudeDelta: 0, longitudeDelta: 0 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingTop: 20,
        gap: 15,
    },

    toggler: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    list: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
