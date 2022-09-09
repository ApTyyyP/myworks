const count = document.getElementById("count");
const water = document.getElementById("water");

function flasksAnimate(count, water, maxPercentNumber, animationDuration) {
    let percent = count.innerText;
    let interval;

    interval = setInterval(function () {
        percent++;
        // count.innerHTML = percent;
        water.style.transform = 'translate(0' + ',' + (100 - percent) + '%)';

        if (percent === maxPercentNumber) {
            clearInterval(interval);
        }
    }, animationDuration);
}

flasksAnimate(count, water, 80, 50);