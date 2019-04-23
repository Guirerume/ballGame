import { Engine } from './Engine.js';
import { SoundManager } from './SoundManager.js';
import { LifeController } from './LifeController.js';

export let Bomb = {
  create: create,
};

function create(speed) {
  let gameObject = Engine.game.canvas.display.image({
    x: Math.floor(Math.random() * (Engine.game.canvas.width - 58)),
    y: Engine.game.canvas.height + 1,
    image: "assets/ball_game_sprites_06.png",
    width: 58
  });
  gameObject.name = 'bomb';
  gameObject.speed = speed + 1;
  gameObject.points = 0;
  Engine.game.gameObjects.push(gameObject);
  gameObject.bind("click tap", function () {
    let gameObjectIndex = Engine.game.gameObjects.indexOf(gameObject);
    Engine.game.canvas.removeChild(gameObject);
    Engine.game.gameObjects.splice(gameObjectIndex, 1);

    Engine.game.gameObjects.forEach((gameObject, index) => {
      Engine.game.userScore += gameObject.points;
      Engine.game.points.text = Engine.game.userScore;

      if (gameObject.name === 'heart') {
        LifeController.restore(2);
      } else if (gameObject.name === 'spark') {
        LifeController.damage(1);
      } else if (gameObject.name === 'virus') {
        LifeController.damage(2);
      }

      Engine.game.canvas.removeChild(gameObject);
      delete Engine.game.gameObjects[index];
    });
    SoundManager.play('sound/bomb.wav');
  });
  Engine.game.canvas.addChild(gameObject);
  const date = new Date();
  Engine.game.lastSpawn = date.getTime();
}