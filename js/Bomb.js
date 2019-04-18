class Bomb {
    get create() {
        let bubble = {
            name: "bomb",
            start: {
                x: Math.floor(Math.random() * canvas.width),
                y: canvas.height + 1,
                image: "assets/bolha_03.gif",
                width: 32
            }                
        };
        

        return bubble;
    }
}