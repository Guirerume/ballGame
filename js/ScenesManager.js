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
        x: 230,
        y: 200,
        font: "18px bold",
        text: "Start Game",
        fill: "white"
    });
    let intro = Engine.game.canvas.display.text({
        x: 230,
        y: 230,
        font: "18px bold",
        text: "How to Play?",
        fill: "white"
    });
    let ranking = Engine.game.canvas.display.text({
        x: 230,
        y: 260,
        font: "18px bold",
        text: "Rank",
        fill: "white"
    });
    let survivor = Engine.game.canvas.display.text({
        x: 230,
        y: 290,
        font: "18px bold",
        text: "Survivor Mode",
        fill: "white"
    });
    start.bind("click tap",() => {        
        SoundManager.playLevelBackground();
        ScenesManager.unloadCurrect();
        Engine.start();
    });
    intro.bind("click tap",() => {
        ScenesManager.changeScenes('intro');
    });
    ranking.bind("click tap",() => {
    });
    survivor.bind("click tap",() => {
    });
    Engine.game.canvas.scenes.create("menu", function() {
        this.add(start);
        this.add(intro);
        // this.add(ranking);
        // this.add(survivor);
    });

    //How to Play
    let back = Engine.game.canvas.display.text({
        x: 150,
        y: 400,
        font: "18px bold",
        text: "back",
        fill: "white"
    })
    Engine.game.canvas.scenes.create('intro', function() {
        //Bubble
        this.add(Engine.game.canvas.display.image({
            x: 150,
            y: 100,
            image: "assets/bolha_01.gif",
            width: 58
        }));
        this.add(Engine.game.canvas.display.text({
            x: 220,
            y: 100,
            font: "18px bold",
            text: "Bubble",
            fill: "white"
        }));
        this.add(Engine.game.canvas.display.text({
            x: 220,
            y: 120,
            font: "18px bold",
            text: "Normal bubble that give you 1 point.",
            fill: "white"
        }));

        //Heart
        this.add(Engine.game.canvas.display.image({
            x: 150,
            y: 168,
            image: "assets/bolha_06.gif",
            width: 58
        }));
        this.add(Engine.game.canvas.display.text({
            x: 220,
            y: 168,
            font: "18px bold",
            text: "Bubble: Heart",
            fill: "white"
        }));
        this.add(Engine.game.canvas.display.text({
            x: 220,
            y: 188,
            font: "18px bold",
            text: "Give you a extra life!",
            fill: "white"
        }));
    
        //Points
        this.add(Engine.game.canvas.display.image({
            x: 150,
            y: 238,
            image: "assets/bolha_12.gif",
            width: 58
        }));
        this.add(Engine.game.canvas.display.text({
            x: 220,
            y: 248,
            font: "18px bold",
            text: "Bubble: 10 Points",
            fill: "white"
        }));
        this.add(Engine.game.canvas.display.text({
            x: 220,
            y: 268,
            font: "18px bold",
            text: "Give you more 10 points!",
            fill: "white"
        }));

        //Bomb
        this.add(Engine.game.canvas.display.image({
            x: 150,
            y: 308,
            image: "assets/bolha_03.gif",
            width: 58
        }));
        this.add(Engine.game.canvas.display.text({
            x: 220,
            y: 318,
            font: "18px bold",
            text: "Bomb",
            fill: "white"
        }));
        this.add(Engine.game.canvas.display.text({
            x: 220,
            y: 338,
            font: "18px bold",
            text: "Explode all elements giving points,\nlife and damage if a bad Item is there!",
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
