import enStrings from './localStrings/en-us'
import ruStrings from './localStrings/ru-ru'

export enum Locales {
    RU = 'ru',
    EN = 'en',
}

class Localization {
    languageCode: string
    strings: any

    constructor(languageCode: string) {
        switch (languageCode) {
            case 'en':
                this.languageCode = 'en'
                this.strings = enStrings
                break
            case 'ru':
                this.languageCode = 'ru'
                this.strings = ruStrings
                break
            default:
                this.languageCode = 'en'
                this.strings = enStrings
                break
        }
    }

    isLanguage(languageCode: string) {
        return languageCode === this.languageCode
    }
}

export default Localization
