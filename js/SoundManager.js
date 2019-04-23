'use strict';

export let SoundManager = {
  sound: {
    levelTheme: "",
    effect: ""
  },
  playLevelBackground: playLevelBackground,
  pauseLevelBackground: pauseLevelBackground,
  play: play
};

function playLevelBackground() {
  SoundManager.sound.levelTheme = new Howl({
    src: ['sound/levelBG.mp3'],
    loop: true,
    volume: 0.5
  });
  SoundManager.sound.levelTheme.play()
}

function pauseLevelBackground() {
  SoundManager.sound.levelTheme.pause();
}

function play(sound) {
  SoundManager.sound.effect = new Howl({
    src: [sound],
    autoplay: true,
    volume: 0.5
  });
}
