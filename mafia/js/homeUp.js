(function () {
    function scrollTop() {
        // 1000 ms / 60 fps = time for one frame
        var timeForFrame = 1000 / 60;
        function pseudoRequestAnimationFrame(callback) {
            window.setTimeout(callback, timeForFrame);
        }
        var requestAnimationFrame = window.requestAnimationFrame || pseudoRequestAnimationFrame;

        function easeOutSine(pos) {
            return Math.sin(pos * (Math.PI / 2));
        }

        // speed: time in pixels per second
        var scrollY = window.scrollY || window.pageYOffset;
        var scrollTargetY = 0;
        var speed = 1000;
        var currentTime = 0;

        // min time .1, max time .8 seconds
        var scrollTime = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

        // add animation loop
        function tick() {
            currentTime += 1 / 60;

            var scrollProgressPercent = currentTime / scrollTime;
            var scrollBoost = easeOutSine(scrollProgressPercent);

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

    var upButton = document.createElement('i');

    // widget_position can take such value as "b-up-arrow_pos_left" or "b-up-arrow_pos_right"

    upButton.setAttribute('style', 'visibility: hidden; background: rgba(0, 0, 0, 0); color: rgba(255, 255, 255, 0);');
    upButton.setAttribute('class', 'b-up-arrow b-up-arrow_pos_right');
    upButton.addEventListener('click', scrollTop.bind(null));

    var isShowed = false;

    window.addEventListener('scroll', function () {
        var minHeightToShow = window.innerHeight;
        var scrollY = window.scrollY || window.pageYOffset;
        if (!isShowed && scrollY > minHeightToShow) {
            isShowed = true;
            upButton.setAttribute('style', 'visibility: visible; background: rgba(255, 0, 0, 0.4); color: rgba(255, 255, 255, 1);');
        }
        if (isShowed && scrollY <= minHeightToShow) {
            isShowed = false;
            upButton.setAttribute('style', 'visibility: hidden; background: rgba(0, 0, 0, 0); color: rgba(255, 255, 255, 0);');
        }
    });
    document.body.appendChild(upButton);
})();