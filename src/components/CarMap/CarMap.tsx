import { View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker, Region } from 'react-native-maps'
import iconsHelper from '../../core/helpers/iconsHelper'
import { Car } from '../../types/cars'

interface CarMapProps {
    cars: Car[]
    region?: Region
}

const defaultRegion = { latitude: 60.049995, longitude: 30.422801, latitudeDelta: 0, longitudeDelta: 0 }

export default function CarMap({ cars, region = defaultRegion }: CarMapProps) {
    return (
        <View>
            <MapView style={styles.map} region={region}>
                {cars.map((car, index) => {
                    const carImagePath = iconsHelper.getImageByCarType(car.type)
                    return (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: car.lattitude,
                                longitude: car.longitude,
                            }}
                            image={carImagePath}
                            onPress={() => {
                                console.log(car)
                            }}
                        />
                    )
                })}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
})
