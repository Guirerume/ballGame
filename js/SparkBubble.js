import { Engine } from './Engine.js';
import { SoundManager } from './SoundManager.js';
import { LifeController } from './LifeController.js';

export let SparkBubble = {
  create: create,
};

function create(speed) {
  let gameObject = Engine.game.canvas.display.image({
    x: Math.floor(Math.random() * (Engine.game.canvas.width - Engine.game.widthFivePercent)),
    y: Engine.game.canvas.height + 1,
    image: "assets/ball_game_sprites_33.png",
    width: Engine.game.widthFivePercent
  });
  gameObject.name = 'spark';
  gameObject.speed = speed + Engine.game.slowSpeed;
  gameObject.points = 0;
  Engine.game.gameObjects.push(gameObject);
  gameObject.bind("click tap", function () {
    LifeController.damage(1);
    let gameObjectIndex = Engine.game.gameObjects.indexOf(gameObject);
    Engine.game.canvas.removeChild(gameObject);
    Engine.game.gameObjects.splice(gameObjectIndex, 1);
    SoundManager.play('sound/ai-ai.mp3');
  });
  Engine.game.canvas.addChild(gameObject);
  const date = new Date();
  Engine.game.lastSpawn = date.getTime();
}
