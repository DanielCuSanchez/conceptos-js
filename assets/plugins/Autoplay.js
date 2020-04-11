function Autoplay() {

}

Autoplay.prototype.run = function (player) {
    if(!player.mute){
        player.mute = true
    }
    player.play()
    player.pause()
}

export default Autoplay