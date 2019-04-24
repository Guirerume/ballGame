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
      text: "Score:",
      fill: "white"
    },
    widthThirtySixPercent: 0,
    widththirtyPercent: 0,
    widthFourteenPercent: 0,
    widthTeenPercent: 0,
    widthFivePercent: 0,
    widthTwoPercent: 0,
    widthOnePercent: 0,
    fontSizeDescription: 0,
    slowSpeed: 0,
    fastSpeed: 0,
    fontSmallSize: 0,
    gameObjectSpeed: 0,
    heightNinetyPercent: 0,
    heightFiftyFourPercent: 0,
    heightFiftyPercent: 0,
    heightThrityNinePercent: 0,
    heightThrityFivePercent: 0,
    heightTweetyninePercent: 0,
    heightTweetyFivePercent: 0,
    heightNineteenPercent: 0,
    heightFiveteenPercent: 0,
    heightNinePercent: 0,
    heightFivePercent: 0,
    spawnTime: 0,
    lastSpawn: 0,
    userScore: 0,
    points: {
      text: '',
      fill: "white"
    },
    gameObjects: []
  },
  initialize: initialize,
  start: start,
  canSpawn: canSpawn,
  setPositionValues: setPositionValues

};

function setPositionValues() {
  Engine.game.widthThirtySixPercent = Engine.game.canvas.width * 0.36;
  Engine.game.widththirtyPercent = Engine.game.canvas.width * 0.3;
  Engine.game.widthFourteenPercent = Engine.game.canvas.width * 0.14;
  Engine.game.widthTeenPercent = Engine.game.canvas.width * 0.1;
  Engine.game.widthFivePercent = Engine.game.canvas.width * 0.05;
  Engine.game.widthTwoPercent = Engine.game.canvas.width * 0.02;
  Engine.game.widthOnePercent = Engine.game.canvas.width * 0.01;
  Engine.game.fontSmallSize = Engine.game.canvas.width * 0.015;
  Engine.game.slowSpeed = Engine.game.canvas.height * 0.005;
  Engine.game.fastSpeed = Engine.game.canvas.height * 0.007;
  Engine.game.heightNinetyPercent = Engine.game.canvas.height * 0.9;
  Engine.game.heightFiftyFourPercent = Engine.game.canvas.height * 0.54;
  Engine.game.heightFiftyPercent = Engine.game.canvas.height * 0.50;
  Engine.game.heightThrityNinePercent = Engine.game.canvas.height * 0.39;
  Engine.game.heightThrityFivePercent = Engine.game.canvas.height * 0.35;
  Engine.game.heightTweetyninePercent = Engine.game.canvas.height * 0.29;
  Engine.game.heightTweetyFivePercent = Engine.game.canvas.height * 0.25;
  Engine.game.heightNineteenPercent = Engine.game.canvas.height * 0.19;
  Engine.game.heightFiveteenPercent = Engine.game.canvas.height * 0.15;
  Engine.game.heightNinePercent = canvas.height * 0.09;
  Engine.game.heightFivePercent = Engine.game.canvas.height * 0.05;
}

function initialize(config) {
  Engine.setPositionValues();
  Engine.game.score.x = Engine.game.widthOnePercent;
  Engine.game.score.y = Engine.game.widthTwoPercent;
  Engine.game.score.font = Engine.game.widthTwoPercent + "px bold";

  Engine.game.points.x = Engine.game.widthTeenPercent;
  Engine.game.points.y = Engine.game.widthTwoPercent;
  Engine.game.points.font = Engine.game.widthTwoPercent + "px bold";

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
      if (gameObject.y > (0 - Engine.game.canvas.height * 0.10)) {
        gameObject.y = gameObject.y - gameObject.speed;
      } else {
        gameObject.y = canvas.height + 1;
      }

      if (gameObject.y < (0 - Engine.game.canvas.height * 0.10) && gameObject.id && gameObject.name != "normal") {
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
