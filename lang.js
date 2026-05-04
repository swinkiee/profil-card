let titleHU = 'Bogdanova Anasztázia profile card'; // string: '' "" 
let titleEN = 'Anastasiya Bogdanova profile card';
let nameHU = 'Bogdanova Anasztázia';
let nameEN = 'Anastasiya Bogdanova';

initLanguageDefault();

function initLanguageDefault() {
    languageChangeHU();
}

function languageChangeHU() {
    document.querySelector('[data-i18n="title"]').innerHTML = titleHU;
    document.querySelector('[data-i18n="name"]').innerHTML = nameHU;
}

function languageChangeEN() {
    document.querySelector('[data-i18n="title"]').innerHTML = titleEN;
    document.querySelector('[data-i18n="name"]').innerHTML = nameEN;
}