import { Engine } from './Engine.js';

export let LifeController = {
  lifePoints: 0,
  hearts: [],
  create: create,
  restore: restore,
  damage: damage,
  destroy: destroy
};

function create(points) {
  LifeController.lifePoints = points;
  let hearts = Math.floor(points / 2);
  let halfHearts = Math.floor(points % 2);
  let lastPosition = Engine.game.canvas.width - 58;
  let countHearts = 0;
  let countHalfHearts = 0;

  while (countHearts < hearts) {
    countHearts++;
    let heart = Engine.game.canvas.display.image({
      x: lastPosition,
      y: 10,
      image: "assets/ball_game_sprites_14.png",
      width: 48
    });
    heart.name = "fullLife";
    LifeController.hearts.push(heart);
    Engine.game.canvas.addChild(heart);
    lastPosition -= 58;
  }

  while (countHalfHearts < halfHearts) {
    countHalfHearts++;
    let half = Engine.game.canvas.display.image({
      x: lastPosition,
      y: 10,
      image: "assets/ball_game_sprites_16.png",
      width: 48
    });
    half.name = "halfLife";
    LifeController.hearts.push(half);
    Engine.game.canvas.addChild(half);
    lastPosition -= 58;
  }
}

function restore(points) {
  LifeController.lifePoints += points;
  LifeController.destroy();
  LifeController.create(LifeController.lifePoints);
}

function damage(points) {
  LifeController.lifePoints -= points;
  LifeController.destroy();
  LifeController.create(LifeController.lifePoints);
  if (LifeController.lifePoints < 1) {
    console.log('Game Over');
  }
}

function destroy() {
  LifeController.hearts.forEach((heart) => {
    Engine.game.canvas.removeChild(heart);
  });

  LifeController.hearts = [];
}