import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import LocalizationContext from '../../core/contexts/LocalizationContext'
import Localization from '../../localization'

export default function SettingsScreen() {
    const { localization, setLocalization } = useContext(LocalizationContext)

    const toggleLanguage = () => {
        if (setLocalization) {
            setLocalization(new Localization(localization.languageCode === 'ru' ? 'en' : 'ru'))
        }
    }

    return (
        <View style={styles.container}>
            <Button onPress={toggleLanguage} title={localization.strings.changeLanguage} />
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
})
