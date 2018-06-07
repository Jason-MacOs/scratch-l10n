/**
 * Currently supported locales for the Scratch Project
 * @type {Object} Key Value pairs of locale code: Language name written in the language
 */

const locales = {
    'en': {name: 'English'},
    'zh-cn': {name: '简体中文'},
};

const customLocales = {
    'zh-cn': {
        locale: 'zh-cn',
        parentLocale: 'zh'
    },
};

const wwwLocales = {
    'en': {name: 'English'},
    'zh-cn': {name: '简体中文'},
};

export {locales as default, customLocales, wwwLocales};
