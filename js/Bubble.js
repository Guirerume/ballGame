import { Engine } from './Engine.js';
import { SoundManager } from './SoundManager.js';

export let Bubble = {
  create: create,
};

function create(speed) {
  let gameObject = Engine.game.canvas.display.image({
    x: Math.floor(Math.random() * (Engine.game.canvas.width - Engine.game.widthFivePercent)),
    y: Engine.game.canvas.height + 1,
    image: "assets/ball_game_sprites_01.png",
    width: Engine.game.widthFivePercent
  });
  gameObject.name = "normal";
  gameObject.speed = speed + Engine.game.slowSpeed;
  gameObject.points = 1;
  Engine.game.gameObjects.push(gameObject);
  gameObject.bind("click tap", function () {
    Engine.game.userScore += gameObject.points;
    Engine.game.points.text = Engine.game.userScore;
    let gameObjectIndex = Engine.game.gameObjects.indexOf(gameObject);
    Engine.game.canvas.removeChild(gameObject);
    Engine.game.gameObjects.splice(gameObjectIndex, 1);
    SoundManager.play('sound/bubble.wav');
  });
  Engine.game.canvas.addChild(gameObject);
  const date = new Date();
  Engine.game.lastSpawn = date.getTime();
}
