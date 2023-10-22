// Api
const EXTERNAL_URL = 'https://api.nomoreparties.co';
const OUR_URL = 'https://api.semeontarasenko.nomoreparties.co';

export { EXTERNAL_URL, OUR_URL }

// Фильмы
const DESKTOP_WIDTH = 1280;
const TABLET_WIDTH = 990;
const MIDDLE_WIDTH = 758;
const MOBILE_WIDTH = 481;

const DESKTOP_AMOUNT = { amountToShow: 16, amountToAdd: 4 }
const TABLET_AMOUNT = { amountToShow: 12, amountToAdd: 3 }
const MIDDLE_AMOUNT = { amountToShow: 8, amountToAdd: 2 }
const INBETWEEN_AMOUNT = { amountToShow: 4, amountToAdd: 1 }
const MOBILE_AMOUNT = { amountToShow: 5, amountToAdd: 2 }

const TIME_UNIT = 60;
const SHORTS_DURATION = 40;

export { DESKTOP_WIDTH, TABLET_WIDTH, MIDDLE_WIDTH, MOBILE_WIDTH, DESKTOP_AMOUNT, TABLET_AMOUNT, MIDDLE_AMOUNT, INBETWEEN_AMOUNT, MOBILE_AMOUNT, TIME_UNIT, SHORTS_DURATION }

// Ошибки 
const REGISTRATION_ERROR = 'Не удалось зарегистрироваться, повторите попытку позже';
const AUTHORIZATION_ERROR = 'Неправильный логин или пароль';
const EMAIL_ERROR = 'Пользователь с таким email уже существует';
const UPDATE_PROFILE_ERROR = 'Не удалось обновить данные профиля';
const NOTFOUND_ERROR = 'По запросу ничего не найдено';

export { REGISTRATION_ERROR, AUTHORIZATION_ERROR, EMAIL_ERROR, UPDATE_PROFILE_ERROR, NOTFOUND_ERROR }