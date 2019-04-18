class Bubble {
    get create() {
        const bubble = {
            name: "normal",
            start: {
                x: Math.floor(Math.random() * canvas.width),
                y: canvas.height + 1,
                image: "assets/bolha_01.gif",
                width: 32
            }
        };

        return bubble;
    }
}