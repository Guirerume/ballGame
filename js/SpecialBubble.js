class SpecialBubble {
    get create() {
        const randomInt = Math.floor(Math.random() * Math.floor(40));
        let bubble = {};

        if (randomInt < 10) {
            bubble = {
                name: "hearth",
                start: {
                    x: Math.floor(Math.random() * canvas.width),
                    y: canvas.height + 1,
                    image: "assets/bolha_06.gif",
                    width: 32
                },
                end: {
                    x: 300,
                    y: canvas.height + 1,
                    image: "assets/bolha_07.gif",
                    width: 32
                }
                
            };
        } else {
            bubble = {
                name: "points",
                start: {
                    x: Math.floor(Math.random() * canvas.width),
                    y: canvas.height + 1,
                    image: "assets/bolha_12.gif",
                    width: 32
                },
                end: {
                    x: 300,
                    y: canvas.height + 1,
                    image: "assets/bolha_13.gif",
                    width: 32
                }
            };
        }
        

        return bubble;
    }
}