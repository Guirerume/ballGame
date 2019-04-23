import { Engine } from './Engine.js';
import { SoundManager } from './SoundManager.js';
import { LifeController } from './LifeController.js';

export let SpecialBubble = {
    create: create,
};

function create(speed) {
    const randomInt = Math.floor(Math.random() * Math.floor(40));
    let gameObject;
    if (randomInt < 10) {
        gameObject = Engine.game.canvas.display.image({
            x: Math.floor(Math.random() * (Engine.game.canvas.width - 58)),
            y: Engine.game.canvas.height + 1,
            image: "assets/ball_game_sprites_10.png",
            width: 58
        });
        gameObject.name = 'heart';
        gameObject.points = 1;
        gameObject.sound = 'sound/heart.wav'
    } else {
        gameObject = Engine.game.canvas.display.image({
            x: Math.floor(Math.random() * (Engine.game.canvas.width - 58)),
            y: Engine.game.canvas.height + 1,
            image: "assets/ball_game_sprites_20.png",
            width: 58
        });
        gameObject.name = 'points';
        gameObject.points = 10;
        gameObject.sound = 'sound/points.wav'
    }
    Engine.game.gameObjects.push(gameObject);
    gameObject.speed = speed + 5;
    gameObject.bind("click tap", function() {
        Engine.game.userScore += gameObject.points;
        if (gameObject.name === 'heart') {
            LifeController.restore(2);
        } 
        Engine.game.points.text = Engine.game.userScore;
        let gameObjectIndex = Engine.game.gameObjects.indexOf(gameObject);
        Engine.game.canvas.removeChild(gameObject);
        Engine.game.gameObjects.splice(gameObjectIndex, 1);
        SoundManager.play(gameObject.sound);
    });
    Engine.game.canvas.addChild(gameObject);
    const date = new Date();
    Engine.game.lastSpawn = date.getTime();
}