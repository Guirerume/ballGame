'use strict'
import { Bubble } from './Bubble.js';
import { SpecialBubble } from './SpecialBubble.js';
import { SparkBubble } from './SparkBubble.js';
import { Bomb } from './Bomb.js';

export const GameObjectFactory = {
  generate: generate
}

function generate(gameObjectSpeed) {
  const randomInt = Math.floor(Math.random() * Math.floor(80));

  if (randomInt < 10) {
    SpecialBubble.create(gameObjectSpeed);
  } else if (randomInt > 10 && randomInt < 15) {
    Bomb.create(gameObjectSpeed);
  } else if (randomInt > 15 && randomInt < 30) {
    SparkBubble.create(gameObjectSpeed);
  } else {
    Bubble.create(gameObjectSpeed);
  }
}
