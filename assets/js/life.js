// Начало
function start() {
    const fields = ['day', 'month', 'year', 'age', 'months', 'weeks', 'answer', 'hours', 'min', 'sec', 'bday', 'milli'];
    fields.forEach(field => document.form1[field].value = "");
}

// ЗАПРЕТ ПРАВОЙ КНОПКИ МЫШИ
document.oncontextmenu = event => {
    event.preventDefault();
};

// Проверка високосного года
const isLeapYear = year => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

let milliInterval;  // Переменная для хранения setInterval

function run() {
    const form = document.form1;
    const dd = parseInt(form.day.value);
    const mm = parseInt(form.month.value);
    const yy = parseInt(form.year.value);

    if (isNaN(dd) || isNaN(mm) || isNaN(yy) || mm < 1 || mm > 12 || dd < 1 || dd > 31 || yy < 1 || yy > 9999) {
        form.age.value = "Невірно заповнені поля!";
        start();
        return;
    }

    const daysInMonth = [31, isLeapYear(yy) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (dd > daysInMonth[mm - 1]) {
        form.age.value = "Невірно заповнені поля!";
        start();
        return;
    }

    const today = new Date();
    const birthDate = new Date(yy, mm - 1, dd);
    const diff = today - birthDate;

    const ageYears = today.getFullYear() - yy - (today.getMonth() + 1 < mm || (today.getMonth() + 1 === mm && today.getDate() < dd) ? 1 : 0);
    const ageMonths = ageYears * 12 + (today.getMonth() + 1) - mm + (today.getDate() < dd ? -1 : 0);
    const ageWeeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
    const ageDays = Math.floor(diff / (24 * 60 * 60 * 1000));
    const ageHours = ageDays * 24 + today.getHours();
    const ageMinutes = ageHours * 60 + today.getMinutes();
    const ageSeconds = ageMinutes * 60 + today.getSeconds();

    form.age.value = `Вам ${ageYears} років і `;
    form.months.value = ageMonths;
    form.weeks.value = ageWeeks;
    form.answer.value = ageDays;
    form.hours.value = ageHours;
    form.min.value = ageMinutes;
    form.sec.value = ageSeconds;

    // Обновление миллисекунд в реальном времени
    if (milliInterval) clearInterval(milliInterval);  // Сброс предыдущего интервала
    milliInterval = setInterval(() => {
        const now = new Date();
        const ageMillis = diff + (now - today);  // Текущее время - время запуска
        form.milli.value = ageMillis;
    }, 1);

    const nextBirthday = new Date(today.getFullYear() + (today > birthDate ? 1 : 0), mm - 1, dd);
    const daysUntilBirthday = Math.ceil((nextBirthday - today) / (24 * 60 * 60 * 1000));
    const hoursLeft = 23 - today.getHours();
    const minutesLeft = 59 - today.getMinutes();
    const secondsLeft = 59 - today.getSeconds();

    if (daysUntilBirthday === 0) {
        form.bday.value = "Ваш день народження сьогодні.";
        alert(`З Днем Народження Вас!!! Вам сьогодні виповнилося ${ageYears + 1} років.`);
    } else {
        form.bday.value = `${daysUntilBirthday} днів ${hoursLeft} годин ${minutesLeft} хвилин ${secondsLeft} секунд.`;
        setTimeout(run, 1000);  // Обновление всех значений раз в секунду, кроме миллисекунд
    }

    const dayOfWeek = birthDate.getDay();
    const daysOfWeek = [
        "Ви народились у неділю.",
        "Ви народилися у понеділок.",
        "Ви народилися у вівторок.",
        "Ви народилися у середу.",
        "Ви народилися у четвер.",
        "Ви народилися у п'ятницю.",
        "Ви народилися у суботу."
    ];
    form.age.value += daysOfWeek[dayOfWeek];
}

// Конец