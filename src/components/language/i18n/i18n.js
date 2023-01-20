import i18n, { init } from 'i18next';
import { initReactI18next } from 'react-i18next';
import {TRANSLATIONS_EN} from '../locales/en/translations_en';
import {TRANSLATIONS_RU} from '../locales/en/translations_ru';

i18n.use(initReactI18next)
init({
    resources:{
        en:TRANSLATIONS_EN,
        ru:TRANSLATIONS_RU
    },
    lng:'az',
    interpolation:{
        escapeValue:false,
    }
});