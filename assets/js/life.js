// Начало
function start() {
    document.form1.day.value = "";
    document.form1.month.value = "";
    document.form1.year.value = "";
    document.form1.age.value = "";
    document.form1.months.value = "";
    document.form1.weeks.value = "";
    document.form1.answer.value = "";
    document.form1.hours.value = "";
    document.form1.min.value = "";
    document.form1.sec.value = "";
    document.form1.bday.value = "";
    document.form1.milli.value = "";
}

<!--ЗАПРЕТ ПРАВОЙ КНОПКИ МЫШИ-->
function click() {
    event.cancelBubble = true;
    event.returnValue = false;
}

document.oncontextmenu = click;

function run() {
    // let ap; - for am/pm
    let dd = document.form1.day.value;
    let mm = document.form1.month.value;
    let yy = document.form1.year.value;
    with (document.form1) {
        // ap = parseInt(ampm.selectedIndex);
        hr = parseInt(hrs.value);
        if (hr <= 0 && hr >= 13) {
            // ap = null;
            alert("Помилка!")
        }
    }
    let main = "Правильно заповнені поля:";
    if ((mm < 1) || (mm > 12) || (dd < 1) || (dd > 31) || (yy < 1) || (mm == "") || (dd == "") || (yy == ""))
        main = "Невірно заповнені поля!";
    else if (((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11)) && (dd > 30))
        main = "Невірно заповнені поля!";
    else if (mm == 2) {
        if (dd > 29)
            main = "Невірно заповнені поля!";
        else if ((dd > 28) && (!lyear(yy)))
            main = "Невірно заповнені поля!";
    } else if ((yy > 9999) || (yy < 0))
        main = "Невірно заповнені поля!";
    else
        main = main;
    if (main == "Правильно заповнені поля:") {
        function leapyear(a) {
            if (((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0))
                return true;
            else
                return false;
        }

        let days, gdate, gmonth, gyear, age;

        days = new Date();
        gdate = days.getDate();
        gmonth = days.getMonth();
        // gmonth = (days.getMonth() + 1).toString().padStart(2, "0");
        gyear = days.getFullYear();
        age = gyear - yy;

        if ((mm == (gmonth + 1)) && (dd <= parseInt(gdate))) {
            age = age;
        } else {
            if (mm <= (gmonth)) {
                age = age;
            } else {
                age = age - 1;
            }
        }
        if (age == 0)
            age = age;
        document.form1.age.value = "Вам " + age + " років і ";
        if (mm <= (gmonth + 1))
            age = age - 1;
        if ((mm == (gmonth + 1)) && (dd > parseInt(gdate)))
            age = age + 1;

        let n, m;

        if (mm == 12) {
            n = 31 - dd;
        }
        if (mm == 11) {
            n = 61 - dd;
        }
        if (mm == 10) {
            n = 92 - dd;
        }
        if (mm == 9) {
            n = 122 - dd;
        }
        if (mm == 8) {
            n = 153 - dd;
        }
        if (mm == 7) {
            n = 184 - dd;
        }
        if (mm == 6) {
            n = 214 - dd;
        }
        if (mm == 5) {
            n = 245 - dd;
        }
        if (mm == 4) {
            n = 275 - dd;
        }
        if (mm == 3) {
            n = 306 - dd;
        }
        if (mm == 2) {
            n = 334 - dd;
            if (leapyear(yy)) n = n + 1;
        }
        if (mm == 1) {
            n = 365 - dd;
            if (leapyear(yy)) n = n + 1;
        }
        if (gmonth == 1) {
            m = 31;
        }
        if (gmonth == 2) {
            m = 59;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 3) {
            m = 90;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 4) {
            m = 120;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 5) {
            m = 151;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 6) {
            m = 181;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 7) {
            m = 212;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 8) {
            m = 243;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 9) {
            m = 273;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 10) {
            m = 304;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 11) {
            m = 334;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 12) {
            m = 365;
            if (leapyear(gyear)) m = m + 1;
        }

        let totdays, months, p;

        totdays = (parseInt(age) * 365);
        totdays += age / 4;
        totdays = parseInt(totdays) + gdate + m + n;
        // document.form1.answer.value = "" + totdays + " днів";
        document.form1.answer.value = "" + totdays;
        months = age * 12;
        months += 12 - parseInt(mm);
        months += gmonth;
        // document.form1.months.value = months + " місяців";
        document.form1.months.value = months;
        if (gmonth == 1) p = 31 + gdate;
        if (gmonth == 2) {
            p = 59 + gdate;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 3) {
            p = 90 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 4) {
            p = 120 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 5) {
            p = 151 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 6) {
            p = 181 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 7) {
            p = 212 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 8) {
            p = 243 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 9) {
            p = 273 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 10) {
            p = 304 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 11) {
            p = 334 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 12) {
            p = 365 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }

        let weeks, time, ghour, gmin, gsec, hour, hr;

        weeks = totdays / 7;
        weeks += " неділь";
        weeks = parseInt(weeks);
        // document.form1.weeks.value = weeks + " тижнів";
        document.form1.weeks.value = weeks;
        time = new Date();
        ghour = time.getHours();
        gmin = time.getMinutes();
        gsec = time.getSeconds();
        hour = ((age * 365) + n + p) * 24;
        hour += (parseInt(age / 4) * 24); // -hr for 24 hour

        /* For AM/PM
        if (ap == 0)
            hour = hour - hr;
        else {
            if (ap == 1) {
                hour = hour - (11 + hr)
            }
        }
        */

        // document.form1.hours.value = hour + " годин";
        document.form1.hours.value = hour;
        let min;
        min = (hour * 60) + gmin;
        // document.form1.min.value = min + " хвилин";
        document.form1.min.value = min;
        sec = (min * 60) + gsec;
        // document.form1.sec.value = sec + " секунд";
        document.form1.sec.value = sec;
        let millisec;
        let gmil;
        gmil = days.getMilliseconds();
        millisec = (sec * 1000) + gmil;
        // document.form1.milli.value = millisec + " мілісекунд";
        document.form1.milli.value = millisec;
        mm = mm - 1;
        let r;
        if (mm == 0) r = 1;
        if (mm == 1) r = 31;
        if (mm == 2) {
            r = 59;
            if (leapyear(gyear)) m = m + 1;
        }
        if (mm == 3) {
            r = 90;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 4) {
            r = 120;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 5) {
            r = 151;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 6) {
            r = 181;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 7) {
            r = 212;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 8) {
            r = 243;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 9) {
            r = 273;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 10) {
            r = 304;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 11) {
            r = 334;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 12) {
            r = 365;
            if (leapyear(gyear)) r = r + 1;
        }
        let a, bday;
        mm = mm + 1;
        r = parseInt(r) + parseInt(dd);
        if (mm > (gmonth + 1)) {
            bday = r - m - gdate;
        } else {
            if (mm == (gmonth + 1) && (gdate < dd)) {
                bday = (r - m - gdate);
            } else {
                if ((leapyear(gyear)) && ((mm > 2) && (dd < 29))) {
                    a = 366;
                } else {
                    a = 365;
                }
                bday = a + (r - m - gdate);
            }
        }
        let nhour, nmin, nsec;

        nhour = 24 - parseInt(ghour);
        nmin = 60 - parseInt(gmin);
        nsec = 60 - parseInt(gsec);
        go();
        if (((bday == 366) && (leapyear(yy))) || ((bday == 365) && (!leapyear(yy)))) {
            document.form1.bday.value = "Ваш день народження сьогодні.";
            age = age + 1;
            alert("З Днем Народження Вас!!! Вам сьогодні виповнилося " + age + " років."); // Появляется сообщение
        } else {
            document.form1.bday.value = bday + " днів " + nhour + " годин " + nmin + " хвилин " + nsec + " секунд.";
            setTimeout("run()", 1);
        }

        function go() {
            function lyear(a) {
                return ((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0);
            }

            mm = parseInt(mm);
            dd = parseInt(dd);
            yy = parseInt(yy);
            if ((mm < 1) || (mm > 12) || (dd < 1) || (dd > 31) || (yy < 1) || (mm == " ") || (dd == " ") || (yy == " ")) main = "Невірно заповнені поля!";
            else if (((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11)) && (dd > 30)) main = "Невірно заповнені поля!";
            else if (mm == 2) {
                if (dd > 29)
                    main = "Невірно заповнені поля!";
                else if ((dd > 28) && (!lyear(yy)))
                    main = "Невірно заповнені поля!";
            } else main = main;
            if (main == "Правильно заповнені поля:") {
                let m;
                if (mm == 1) n = 31;
                if (mm == 2) n = 59 + 1;
                if (mm == 3) n = 90 + 1;
                if (mm == 4) n = 120 + 1;
                if (mm == 5) n = 151 + 1;
                if (mm == 6) n = 181 + 1;
                if (mm == 7) n = 212 + 1;
                if (mm == 8) n = 243 + 1;
                if (mm == 9) n = 273 + 1;
                if (mm == 10) n = 304 + 1;
                if (mm == 11) n = 334 + 1;
                if (mm == 12) n = 365 + 1;
                if ((mm == 1) || (mm == 3) || (mm == 5) || (mm == 7) || (mm == 8) || (mm == 10) || (mm == 12))
                    n += 31 + dd;
                else if ((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11))
                    n += 31 + dd + 1;
                else if (mm == 2) {
                    if (lyear(yy)) n += 29 + dd - 3;
                    else if (!lyear(yy)) n += 28 + dd - 1;
                }

                let fours, hunds, fhunds;

                fours = yy / 4;
                hunds = yy / 100;
                fhunds = yy / 400;
                let day;
                day = (yy + n + fours - hunds + fhunds) % 7;
                day = parseInt(day);
                switch (day) {
                    case 1 :
                        document.form1.age.value += "Ви народились у неділю.";
                        break;
                    case 2 :
                        document.form1.age.value += "Ви народилися у понеділок.";
                        break;
                    case 3 :
                        document.form1.age.value += "Ви народилися у вівторок.";
                        break;
                    case 4 :
                        document.form1.age.value += "Ви народилися у середу.";
                        break;
                    case 5 :
                        document.form1.age.value += "Ви народилися у четвер.";
                        break;
                    case 6 :
                        document.form1.age.value += "Ви народилися у п'ятницю.";
                        break;
                    case 7 :
                        document.form1.age.value += "Ви народилися у суботу.";
                        break;
                    case 0 :
                        document.form1.age.value += "Ви народилися у суботу.";
                        break
                }
            } else {
                document.form1.age.value += main + " дата.";
            }
        }
    } else {
        document.form1.age.value = main + " дата.";
        document.form1.months.value = "";
        document.form1.weeks.value = "";
        document.form1.answer.value = "";
        document.form1.hours.value = "";
        document.form1.min.value = "";
        document.form1.sec.value = "";
        document.form1.bday.value = "";
        document.form1.milli.value = "";
    }
}

// Конец