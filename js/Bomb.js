import { Engine } from './Engine.js';
import { SoundManager } from './SoundManager.js';

export let Bomb = {
    create: create,
};

function create(speed) {
    let gameObject = Engine.game.canvas.display.image({
            x: Math.floor(Math.random() * Engine.game.canvas.width),
            y: Engine.game.canvas.height + 1,
            image: "assets/bolha_03.gif",
            width: 58
        });
    gameObject.name = 'bomb';
    gameObject.speed = speed + 1;
    gameObject.points = 0;
    Engine.game.gameObjects.push(gameObject);
    gameObject.bind("click tap", function() {
        let gameObjectIndex = Engine.game.gameObjects.indexOf(gameObject);
        Engine.game.canvas.removeChild(gameObject);
        Engine.game.gameObjects.splice(gameObjectIndex, 1);

        Engine.game.gameObjects.forEach((gameObject, index) => {
            Engine.game.userScore += gameObject.points;    
            Engine.game.points.text = Engine.game.userScore;
            Engine.game.canvas.removeChild(gameObject);
            delete Engine.game.gameObjects[index];
        });
        SoundManager.play('sound/bomb.wav');
    });
    Engine.game.canvas.addChild(gameObject);
    const date = new Date();
    Engine.game.lastSpawn = date.getTime();
}