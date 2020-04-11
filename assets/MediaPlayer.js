
function MediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this.active = false
    this._initPlugins
}
MediaPlayer.prototype._initPlugins = function () {

    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        get mute() {
            this.media.muted

        },
        set mute(value) {
            this.media.muted = value
        }
    }
    this.pause()
    console.log(this)
    console.log(player)
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
}

MediaPlayer.prototype.muted = function () {
    this.media.muted = true
}
MediaPlayer.prototype.unmuted = function () {
    this.media.muted = false
}

MediaPlayer.prototype.toggleMuted = function () {
    console.log('toggle muted')
    console.log(this.media)
    !this.media.muted
        ? this.muted()
        : this.unmuted()
}
MediaPlayer.prototype.togglePlay = function () {
    console.log('toggle play')
    this.active = !this.active
    this.active
        ? this.play()
        : this.pause()
}
MediaPlayer.prototype.play = function () {
    this.media.play()
}
MediaPlayer.prototype.pause = function () {
    this.media.pause()
}

export default MediaPlayer