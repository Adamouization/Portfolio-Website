/**
 * Typewrite effect in page head.
 * Original code: https://css-tricks.com/snippets/css/typewriter-effect/
 */

/**
 * TextType object.
 * @param el
 * @param toRotate
 * @param period
 * @constructor
 */
const textType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNumber = 0;
    this.period = parseInt(period, 10) || 2000;
    this.text = "";
    this.tick();
    this.isDeleting = false;
};

/**
 *
 */
textType.prototype.tick = function () {
    const i = this.loopNumber % this.toRotate.length;
    const fullText = this.toRotate[i];

    if (this.isDeleting) {
        this.text = fullText.substring(0, this.text.length - 1);
    }
    else {
        this.text = fullText.substring(0, this.text.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.text + '</span>';

    const that = this; // Keep to avoid breaking loop.
    let delta = 200 - Math.random() * 250;
    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.text === fullText) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.text === '') {
        this.isDeleting = false;
        this.loopNumber++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new textType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // Inject CSS.
    const css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};