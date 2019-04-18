'use strict'


class ObjectGenerator {
    get generate() {
        const randomInt = Math.floor(Math.random() * Math.floor(80));
        let randomObject = {};

        if (randomInt < 10) {
            randomObject = new SpecialBubble();
        } else if (randomInt > 10 && randomInt < 30) {
            randomObject = new Bomb();
        } else {
            randomObject = new Bubble();
        }

        return randomObject.create;
    }
}