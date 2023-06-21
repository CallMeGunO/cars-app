import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import CarTracker from './src'

export default function App() {
    return (
        <View style={styles.container}>
            <CarTracker />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
