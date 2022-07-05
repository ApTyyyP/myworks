(function () {
    function scrollTop() {
        // 1000 ms / 60 fps = time for one frame
        let timeForFrame = 1000 / 60;
        function pseudoRequestAnimationFrame(callback) {
            window.setTimeout(callback, timeForFrame);
        }
        let requestAnimationFrame = window.requestAnimationFrame || pseudoRequestAnimationFrame;

        function easeOutSine(pos) {
            return Math.sin(pos * (Math.PI / 2));
        }

        // speed: time in pixels per second
        let scrollY = window.scrollY || window.pageYOffset;
        let scrollTargetY = 0;
        let speed = 1000;
        let currentTime = 0;

        // min time .1, max time .8 seconds
        let scrollTime = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

        // add animation loop
        function tick() {
            currentTime += 1 / 60;

            let scrollProgressPercent = currentTime / scrollTime;
            let scrollBoost = easeOutSine(scrollProgressPercent);

            if (scrollProgressPercent < 1) {
                requestAnimationFrame(tick);
                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * scrollBoost));
            } else {
                window.scrollTo(0, scrollTargetY);
            }
        }

        // call it once to get started
        tick();
    }

    let upButton = document.createElement('i');

    // widget_position can take such value as "c-arrow-up--pos-left" or "c-arrow-up--pos-right"

    upButton.setAttribute('style', 'visibility: hidden;');
    upButton.setAttribute('class', 'c-arrow-up c-arrow-up--pos-right');
    upButton.addEventListener('click', scrollTop.bind(null));

    let isShowed = false;

    window.addEventListener('scroll', function () {
        let minHeightToShow = window.innerHeight;
        let scrollY = window.scrollY || window.pageYOffset;
        if (!isShowed && scrollY > minHeightToShow) {
            isShowed = true;
            upButton.setAttribute('style', 'visibility: visible; color: rgba(26, 90, 76, 1); z-index: 10;');
        }
        if (isShowed && scrollY <= minHeightToShow) {
            isShowed = false;
            upButton.setAttribute('style', 'visibility: hidden; color: rgba(26, 90, 76, 0);');
        }
    });
    document.body.appendChild(upButton);
})();