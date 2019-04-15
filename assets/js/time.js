var imgArray = new Array();
var setTime24 = 1;

function ImgClock() {
    var i = 0;
    for (i = 0; i < 10; i++) {
        imgArray[i] = new Image(15, 20)
    }
    imgArray[0].src = "images/time/0.gif"
    imgArray[1].src = "images/time/1.gif"
    imgArray[2].src = "images/time/2.gif"
    imgArray[3].src = "images/time/3.gif"
    imgArray[4].src = "images/time/4.gif"
    imgArray[5].src = "images/time/5.gif"
    imgArray[6].src = "images/time/6.gif"
    imgArray[7].src = "images/time/7.gif"
    imgArray[8].src = "images/time/8.gif"
    imgArray[9].src = "images/time/9.gif"
    jsImgClock24hr()
}

function jsImgClock24hr() {

    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var sec = 0;
    var sec10 = 0;
    var min = 0;
    var min10 = 0;
    var hr = 0;
    var hr10 = 0;

    sec10 = Math.floor(second / 10);
    sec = second - sec10 * 10;
    document.img24Sec.src = imgArray[sec].src;
    if (sec == 0 || setTime24 == 1) {
        document.img24Sec10.src = imgArray[sec10].src;
        min10 = Math.floor(minute / 10);
        min = minute - min10 * 10;
        document.img24Min.src = imgArray[min].src;
        if (min == 0 || setTime24 == 1) {
            document.img24Min10.src = imgArray[min10].src;
            hr10 = Math.floor(hour / 10);
            hr = hour - hr10 * 10;
            document.img24Hr.src = imgArray[hr].src;
            document.img24Hr10.src = imgArray[hr10].src;
            setTime24 = 0
        }
    }
    id = setTimeout("jsImgClock24hr()", 1000)
}