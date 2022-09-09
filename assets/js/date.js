/**
 * @return {string}
 */
function GetDay(intDay) {
    // var DayArray = ["<b><u>Воскресенье</u></b>", "<b><u>Понедельник</u></b>",
    //     "<b><u>Вторник</u></b>", "<b><u>Среда</u></b>", "<b><u>Четверг</u></b>", "<b><u>Пятница</u></b>", "<b><u>Суббота</u></b>"];
    var DayArray = ["<b><u>Неділя</u></b>", "<b><u>Понеділок</u></b>",
        "<b><u>Вівторок</u></b>", "<b><u>Середа</u></b>", "<b><u>Четверг</u></b>", "<b><u>П'ятниця</u></b>", "<b><u>Субота</u></b>"];
    return DayArray[intDay];
}

/**
 * @return {string}
 */
function GetMonth(intMonth) {
    // var MonthArray = ["Января", "Февраля", "Марта",
    //     "Апреля", "Мая", "Июня",
    //     "Июля", "Августа", "Сентября",
    //     "Октября", "Ноября", "Декабря"];
    var MonthArray = ["Січня", "Лютого", "Березня",
        "Квітня", "Травня", "Червня",
        "Липня", "Серпня", "Вересня",
        "Жовтня", "Листопада", "Грудня"];
    return MonthArray[intMonth];
}

function getDateStr() {
    var today = new Date();
    var year = today.getYear();

    if (year < 1000) year += 1900;

    var todayStr = GetDay(today.getDay()) + ", ";
    todayStr += today.getDate() + " " + GetMonth(today.getMonth());
    todayStr += ", " + year;
    return todayStr;
}