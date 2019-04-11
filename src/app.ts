import "phaser";
import { SceneMain } from "./SceneMain";

var config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 640,
    backgroundColor: "black",
    physics: {
        default: "arcade",
        arcade: {
            Gravity: { x: 0, y: 0 }
        }
    },
    scene: [
        SceneMain
    ],
    pixelArt: true,
    roundPixels: true
};


export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
      super(config);
    }
  }
  
  window.addEventListener("load", () => {
    var game = new Game(config);
  });