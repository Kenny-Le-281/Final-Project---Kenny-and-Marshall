/* global Phaser */

//Copyright (c) 2022 Kenny and Marshall all rights reserved
//
// Created by: Kenny Le and Marshall Demars
// Created on: June 2022
// This is the Phaser3 configuration file

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

// Our game scene
const splashScene = new SplashScene()
const titleScene = new TitleScene()

/** Game scene.*/
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.Fit,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)

// load scenes
// NOTE: remeber any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)

// start title
game.scene.start('splashScene')