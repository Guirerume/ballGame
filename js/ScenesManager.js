'use strict';
import { SoundManager } from './SoundManager.js';
import { Engine } from './Engine.js';

export let ScenesManager = {
  lastScene: '',
  currectScene: '',
  createScenes: createScenes,
  changeScenes: changeScenes,
  unloadCurrect: unloadCurrect
};

function createScenes() {
  //Menu
  let start = Engine.game.canvas.display.text({
    x: Engine.game.widththirtyPercent,
    y: Engine.game.heightFiveteenPercent,
    font: Engine.game.widthFivePercent + "px bold",
    text: "Start Game",
    fill: "white"
  });
  let intro = Engine.game.canvas.display.text({
    x: Engine.game.widththirtyPercent,
    y: Engine.game.heightTweetyFivePercent,
    font: Engine.game.widthFivePercent + "px bold",
    text: "How to Play?",
    fill: "white"
  });
  let ranking = Engine.game.canvas.display.text({
    x: Engine.game.widththirtyPercent,
    y: Engine.game.heightThrityFivePercent,
    font: Engine.game.widthFivePercent + "px bold",
    text: "Rank",
    fill: "white"
  });
  let survivor = Engine.game.canvas.display.text({
    x: Engine.game.widththirtyPercent,
    y: Engine.game.canvas.height * 0.45,
    font: Engine.game.widthFivePercent + "px bold",
    text: "Survivor Mode",
    fill: "white"
  });
  start.bind("click tap", () => {
    SoundManager.playLevelBackground();
    ScenesManager.unloadCurrect();
    Engine.start();
  });
  intro.bind("click tap", () => {
    ScenesManager.changeScenes('intro');
  });
  ranking.bind("click tap", () => {
  });
  survivor.bind("click tap", () => {
  });
  Engine.game.canvas.scenes.create("menu", function () {
    this.add(start);
    this.add(intro);
    // this.add(ranking);
    // this.add(survivor);
  });

  //How to Play
  let back = Engine.game.canvas.display.text({
    x: Engine.game.widthTwoPercent,
    y: Engine.game.heightNinetyPercent,
    font: Engine.game.widthTwoPercent + "px bold",
    text: "< back",
    fill: "white"
  });
  Engine.game.canvas.scenes.create('intro', function () {
    //Bubble
    this.add(Engine.game.canvas.display.image({
      x: Engine.game.widththirtyPercent,
      y: Engine.game.heightFivePercent,
      image: "assets/ball_game_sprites_01.png",
      width: Engine.game.widthFivePercent
    }));
    this.add(Engine.game.canvas.display.text({
      x: Engine.game.widthThirtySixPercent,
      y: Engine.game.heightFivePercent,
      font: Engine.game.widthTwoPercent + "px bold",
      text: "Bubble",
      fill: "white"
    }));
    this.add(Engine.game.canvas.display.text({
      x: Engine.game.widthThirtySixPercent,
      y: Engine.game.heightNinePercent,
      font: Engine.game.fontSmallSize + "px bold",
      text: "Normal bubble that give you 1 point.",
      fill: "white"
    }));

    //Heart
    this.add(Engine.game.canvas.display.image({
      x: Engine.game.widththirtyPercent,
      y: Engine.game.heightFiveteenPercent,
      image: "assets/ball_game_sprites_10.png",
      width: Engine.game.widthFivePercent
    }));
    this.add(Engine.game.canvas.display.text({
      x: Engine.game.widthThirtySixPercent,
      y: Engine.game.heightFiveteenPercent,
      font: Engine.game.widthTwoPercent + "px bold",
      text: "Bubble: Heart",
      fill: "white"
    }));
    this.add(Engine.game.canvas.display.text({
      x: Engine.game.widthThirtySixPercent,
      y: Engine.game.heightNineteenPercent,
      font: Engine.game.fontSmallSize + "px bold",
      text: "Give you a extra life!",
      fill: "white"
    }));

    //Points
    this.add(Engine.game.canvas.display.image({
      x: Engine.game.widththirtyPercent,
      y: Engine.game.heightTweetyFivePercent,
      image: "assets/ball_game_sprites_20.png",
      width: Engine.game.widthFivePercent
    }));
    this.add(Engine.game.canvas.display.text({
      x: Engine.game.widthThirtySixPercent,
      y: Engine.game.heightTweetyFivePercent,
      font: Engine.game.widthTwoPercent + "px bold",
      text: "Bubble: 10 Points",
      fill: "white"
    }));
    this.add(Engine.game.canvas.display.text({
      x: Engine.game.widthThirtySixPercent,
      y: Engine.game.heightTweetyninePercent,
      font: Engine.game.fontSmallSize + "px bold",
      text: "Give you more 10 points!",
      fill: "white"
    }));

    //Bomb
    this.add(Engine.game.canvas.display.image({
      x: Engine.game.widththirtyPercent,
      y: Engine.game.heightThrityFivePercent,
      image: "assets/ball_game_sprites_06.png",
      width: Engine.game.widthFivePercent
    }));
    this.add(Engine.game.canvas.display.text({
      x: Engine.game.widthThirtySixPercent,
      y: Engine.game.heightThrityFivePercent,
      font: Engine.game.widthTwoPercent + "px bold",
      text: "Bomb",
      fill: "white"
    }));
    this.add(Engine.game.canvas.display.text({
      x: Engine.game.widthThirtySixPercent,
      y: Engine.game.heightThrityNinePercent,
      font: Engine.game.fontSmallSize + "px bold",
      text: "Explode all elements giving points,\nlife and damage if a bad Item is there!",
      fill: "white"
    }));

    //Spark
    this.add(Engine.game.canvas.display.image({
      x: Engine.game.widththirtyPercent,
      y: Engine.game.heightFiftyPercent,
      image: "assets/ball_game_sprites_33.png",
      width: Engine.game.widthFivePercent
    }));
    this.add(Engine.game.canvas.display.text({
      x: Engine.game.widthThirtySixPercent,
      y: Engine.game.heightFiftyPercent,
      font: Engine.game.widthTwoPercent + "px bold",
      text: "Bubble: Spark",
      fill: "white"
    }));
    this.add(Engine.game.canvas.display.text({
      x: Engine.game.widthThirtySixPercent,
      y: Engine.game.heightFiftyFourPercent,
      font: Engine.game.fontSmallSize + "px bold",
      text: "A bad guy, this one take a half of your life.",
      fill: "white"
    }));

    back.bind('click tap', () => {
      ScenesManager.changeScenes(ScenesManager.lastScene);
    })
    this.add(back);
  });
}

function changeScenes(scene) {
  if (ScenesManager.currectScene.length > 0) {
    ScenesManager.unloadCurrect();
  }

  Engine.game.canvas.scenes.load(scene);
  ScenesManager.lastScene = ScenesManager.currectScene;
  ScenesManager.currectScene = scene;


}

function unloadCurrect() {
  Engine.game.canvas.scenes.unload(ScenesManager.currectScene);
}
