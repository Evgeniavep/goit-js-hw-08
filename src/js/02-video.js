import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Проверка на наличие записей в localStorage//

function setTime() {
    const isTimeSaved = localStorage.getItem("videoplayer-current-time");
    if (isTimeSaved) {
        player.setCurrentTime(JSON.parse(isTimeSaved));
    }
}

window.addEventListener('DOMContentLoaded', setTime)
    // player.on('play', onPlay)

// Сохранение данных в localStorage//

player.on('timeupdate', throttle(data => localStorage.setItem("videoplayer-current-time", data.seconds), 1000));