import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

let secondEl = localStorage.getItem('videoplayer-current-time');
player.on(
  'timeupdate',
  throttle(e => {
        localStorage.setItem('videoplayer-current-time', e.seconds);
    }, 1000 )
);

if (secondEl) {
  player.setCurrentTime(secondEl);
}