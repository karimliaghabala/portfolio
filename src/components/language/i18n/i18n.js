import i18n, { init } from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n
.use(initReactI18next)
init({
    resources:{
        en:TRANSLATIONS_EN,
        ru:TRANSLATIONS_RU
    },
    lng:'az',
    fallbackLng:'az',
    interpolation:{
        escapeValue:false,
    }
});