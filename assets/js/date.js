/**
 * @return {string}
 */
const getDayName = (intDay) => [
    "<b><u>Неділя</u></b>", "<b><u>Понеділок</u></b>",
    "<b><u>Вівторок</u></b>", "<b><u>Середа</u></b>",
    "<b><u>Четверг</u></b>", "<b><u>П'ятниця</u></b>",
    "<b><u>Субота</u></b>"
][intDay];

/**
 * @return {string}
 */
const getMonthName = (intMonth) => [
    "Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня",
    "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"
][intMonth];

function getDateStr() {
    const today = new Date();
    return `${getDayName(today.getDay())}, ${today.getDate()} ${getMonthName(today.getMonth())}, ${today.getFullYear()}`;
}