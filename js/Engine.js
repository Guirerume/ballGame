'use strict';
import { GameObjectFactory } from './GameObjectFactory.js';
import { SoundManager } from './SoundManager.js';

export let Engine = {
    game: {
        canvas: oCanvas.create({
            canvas: '#canvas',
            background: '#0cc',
            fps: 60
          }),
        score: {
            x: 10,
            y: 10,
            font: "18px bold",
            text: "Score:",
            fill: "white"
        },
        gameObjectSpeed: 0,
        spawnTime: 0,
        lastSpawn: 0,
        userScore: 0,
        points: {
            x: 75,
            y: 10,
            font: "18px bold",
            text:  '',
            fill: "white"
        },
        gameObjects: []
    },
    initialize: initialize,
    start: start,
    canSpawn: canSpawn,
    wait: wait

};

function initialize(config) {
    Engine.game.spawnTime = config.spawnTime;
    Engine.game.lastSpawn = 0;  
    Engine.game.gameObjectSpeed = config.gameObjectSpeed;
    Engine.wait();
}

function wait() {
    let clickHere = Engine.game.canvas.display.text({
        x: 230,
        y: 200,
        font: "18px bold",
        text: "Click here to start",
        fill: "white"
    });
    Engine.game.canvas.addChild(clickHere);
    clickHere.bind("click tap",() => {
        Engine.game.canvas.removeChild(clickHere);
        SoundManager.playLevelBackground();
        Engine.start();
    });
}

function start() {
    const score = Engine.game.canvas.display.text(Engine.game.score);
    Engine.game.points.text = Engine.game.userScore;
    Engine.game.points = Engine.game.canvas.display.text(Engine.game.points);
    Engine.game.canvas.addChild(score);
    Engine.game.canvas.addChild(Engine.game.points);

    Engine.game.canvas.setLoop(() => {
        if (Engine.canSpawn()) {
            GameObjectFactory.generate(Engine.game.gameObjectSpeed, Engine.game.gameObjectIndex);            
        }
    
        Engine.game.gameObjects.forEach((gameObject, index) => {
            if (gameObject.y > -30) {
                gameObject.y = gameObject.y - gameObject.speed;
            } else {
                gameObject.y = canvas.height + 1;
            }
        
            if (gameObject.y < -30 && gameObject.id && gameObject.name != "normal") {	
                Engine.game.canvas.removeChild(gameObject);
                delete Engine.game.gameObjects[index];
            }
        });
    }).start();
}

function canSpawn() {
	const date = new Date();
	if (Engine.game.gameObjects.length < 15 && (date.getTime() - Engine.game.lastSpawn) > Engine.game.spawnTime) {
		return true;
	}
	return false;
}