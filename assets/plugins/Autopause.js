class Autopause {
    constructor() {
        this.threshold = 0.40
        this.player
        //Permanent at instance of the object 
        this.handlerObserver = this.handlerObserver.bind(this)
    }
    run(player) {
        this.player = player
        const observer = new IntersectionObserver(this.handlerObserver, {
            threshold: this.threshold
        })
        observer.observe(this.player.media)
    }
    handlerObserver(entries) {
        const entry = entries[0]
        //Is visible if this condition is true
        entry.intersectionRatio >= this.threshold
            ? this.player.play()
            : this.player.pause()

        console.log(entry)
    }
}
export default Autopause