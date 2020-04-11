import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/Autoplay.js'
import Autopause from './plugins/Autopause.js';

const video = document.querySelector('video')
const player = new MediaPlayer({ el: video, plugins: [new Autoplay(), new Autopause()] })


const buttonPlay = document.querySelector('.play')
const buttonMute = document.querySelector('.muted')
player._initPlugins()
console.log(buttonPlay)
buttonPlay.onclick = () => player.togglePlay()
console.log(buttonMute)
buttonMute.onclick = () => player.toggleMuted()

