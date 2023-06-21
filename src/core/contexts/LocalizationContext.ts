import { I18n } from 'i18n-js'
import { createContext } from 'react'
import Localization from '../../localization'

interface LocalizationContextProps {
    localization: Localization
    setLocalization?: React.Dispatch<React.SetStateAction<Localization>>
}

const LocalizationContext = createContext<LocalizationContextProps>({ localization: new Localization('ru') })

export default LocalizationContext
