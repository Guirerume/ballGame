'use strict';
import { GameObjectFactory } from './GameObjectFactory.js';
import { ScenesManager } from './ScenesManager.js';
import { LifeController } from './LifeController.js';

export let Engine = {
    game: {
        canvas: oCanvas.create({
            canvas: '#canvas',
            background: '#0cc',
            fps: 30
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

};

function initialize(config) {
    Engine.game.spawnTime = config.spawnTime;
    Engine.game.lastSpawn = 0;  
    Engine.game.gameObjectSpeed = config.gameObjectSpeed;
    ScenesManager.createScenes();
    ScenesManager.changeScenes('menu');
}


function start() {
    const score = Engine.game.canvas.display.text(Engine.game.score);
    Engine.game.points.text = Engine.game.userScore;
    Engine.game.points = Engine.game.canvas.display.text(Engine.game.points);
    Engine.game.canvas.addChild(score);
    Engine.game.canvas.addChild(Engine.game.points);
    LifeController.create(6);

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
	if ((date.getTime() - Engine.game.lastSpawn) > Engine.game.spawnTime) {
		return true;
	}
	return false;
}