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
  let lastPosition = Engine.game.canvas.width - (Engine.game.canvas.width * 0.045);
  let countHearts = 0;
  let countHalfHearts = 0;

  while (countHearts < hearts) {
    countHearts++;
    let heart = Engine.game.canvas.display.image({
      x: lastPosition,
      y: Engine.game.canvas.height * 0.02,
      image: "assets/ball_game_sprites_14.png",
      width: Engine.game.canvas.width * 0.04
    });
    heart.name = "fullLife";
    LifeController.hearts.push(heart);
    Engine.game.canvas.addChild(heart);
    lastPosition -= Engine.game.canvas.width * 0.045;
  }

  while (countHalfHearts < halfHearts) {
    countHalfHearts++;
    let half = Engine.game.canvas.display.image({
      x: lastPosition,
      y: Engine.game.canvas.height * 0.02,
      image: "assets/ball_game_sprites_16.png",
      width: Engine.game.canvas.width * 0.04
    });
    half.name = "halfLife";
    LifeController.hearts.push(half);
    Engine.game.canvas.addChild(half);
    lastPosition -= Engine.game.canvas.width * 0.045;
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
