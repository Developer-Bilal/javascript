const load_text = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

load = 0

let interval = setInterval(blurring, 30)

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(interval);
    }

    load_text.innerHTML = `${load}%`
    load_text.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
