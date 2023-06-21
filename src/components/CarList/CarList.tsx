import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Car } from '../../types/cars'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../../types/navigation'

interface CarListProps {
    cars: Car[]
}

export default function CarList({ cars }: CarListProps) {
    const navigation = useNavigation<ScreenNavigationProp>()

    const carPressHandler = (car: Car) => {
        navigation.navigate('Car', { car: car })
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={cars}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            carPressHandler(item)
                        }}
                    >
                        <View style={styles.listItem}>
                            <Text>ТС#{item.id}</Text>
                            <Text>{item.driverName}</Text>
                            <Text>{item.type}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})
