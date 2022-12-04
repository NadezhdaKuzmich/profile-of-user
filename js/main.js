const yearOfBirth = prompt('Ваш рік народження ?');
const age = 2022 - Number(yearOfBirth);

const regrets = 'Шкода, що Ви не захотіли ввести',
      refusing = 'Ви не ввели';

let country,
    champion,
    checkOf = 0;
      
let messageYearOfBirth,
    messageCity,
    messageChampion;

if (yearOfBirth == '' || yearOfBirth == null) {
    alert(`${regrets} свій рік народження.`);
    messageYearOfBirth = `${refusing} рік народження.`;
    checkOf += 1;
} else if (isNaN(age)) {
    messageYearOfBirth = `Ви некоректно вказали рік народження.`;
} else if (age >= 120) {
    messageYearOfBirth = `Ви певні, що ви людина? Чи ви вказали психологічну дату народження?`;
} else {
    messageYearOfBirth = `Твій вік: ${age}.`;
}

const city = prompt('В якому місті ви проживаєте ?');

switch(city) {
    case 'Київ': {
        country = 'України';
        break;
    }
    case 'Вашингтон': {
        country = 'США';
        break;
    }
    case 'Лондон': {
        country = 'Англії';
        break;
    }
    default: {
        country = '';
        break;
    }
}

if (city == '' || city == null) {
    alert(`${regrets} своє місто проживання.`);
    messageCity = `${refusing} де ви живете.`;
    checkOf += 1;
} else if (country == '') {
    messageCity = `Ти живеш у місті ${city}.`;
} else {
    messageCity = `Ти живеш у столиці ${country}.`;
}

const favoriteSport = prompt('Улюблений вид спорту ?');

switch(favoriteSport) {
    case 'футбол': {
        champion = 'Ліонелем Мессі';
        break;
    }
    case 'баскетбол': {
        champion = 'Леброном Джеймсом';
        break;
    }
    case 'теніс': {
        champion = 'Карлосом Алькарасом';
        break;
    }
    default: {
        champion = '';
        break;
    }
}

if (favoriteSport == '' || favoriteSport == null) {
    alert(`${regrets} свій улюблений вид спорту.`);
    messageChampion = `${refusing} вид спорту.`;
    checkOf += 1;
} else if (champion == '') {
    messageChampion = `Твій улюблений вид спорту ${favoriteSport}.`;
} else {
    messageChampion = `Круто! Хочеш стати ${champion}?`;
}

const messages = (checkOf == 3)
? 'Ти дуже потайна людина. Не бійся, ми не будемо зламувати твій банківський рахунок.'
: `${messageYearOfBirth}
${messageCity}
${messageChampion}`;

alert(messages);