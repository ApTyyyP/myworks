const imgArray = Array.from({ length: 10 }, (_, i) => {
    const img = new Image(15, 20);
    img.src = `images/time/${i}.gif`;
    return img;
});

let setTime24 = true;

function ImgClock() {
    jsImgClock24hr();
}

function jsImgClock24hr() {
    const time = new Date();
    const [hour, minute, second] = [time.getHours(), time.getMinutes(), time.getSeconds()];

    const updateImage = (elementName, value) => {
        const elements = document.getElementsByName(elementName);
        if (elements.length > 0) {
            elements[0].src = imgArray[value].src;
        }
    };

    const [sec10, sec] = [Math.floor(second / 10), second % 10];
    updateImage('img24Sec', sec);
    updateImage('img24Sec10', sec10);

    if (sec === 0 || setTime24) {
        const [min10, min] = [Math.floor(minute / 10), minute % 10];
        updateImage('img24Min', min);
        updateImage('img24Min10', min10);

        if (min === 0 || setTime24) {
            const [hr10, hr] = [Math.floor(hour / 10), hour % 10];
            updateImage('img24Hr', hr);
            updateImage('img24Hr10', hr10);

            setTime24 = false;
        }
    }

    setTimeout(jsImgClock24hr, 1000);
}

window.onload = ImgClock;