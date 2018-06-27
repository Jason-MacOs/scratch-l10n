import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

import locales, {customLocales} from './supported-locales.js';

/*
let localeData = [].concat(
    en,
    zh
);

for (const lang in customLocales) {
    localeData.push(customLocales[lang]);
}
*/
let localeData = {};
localeData.en = en;
localeData['zh'] = zh;

export {
    //locales as default,
    localeData as default// data expected for initializing ReactIntl.addLocaleData
};
