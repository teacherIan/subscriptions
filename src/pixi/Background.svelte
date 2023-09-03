
<script lang="ts">
import * as PIXI from 'pixi.js';

interface pepperInterface {
  x: number;
  y: number;
  scale: number;
  left: boolean;
  object?: PIXI.Sprite;
  rotation: number;
}

class Pixi {
    
  private app: PIXI.Application;
  private pepperAmount: number;
  private peppers: pepperInterface[] = [];

  constructor() {
    console.log("Hello")
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
        backgroundColor: 0x023047,
      resolution: window.devicePixelRatio || 1,
      powerPreference: 'high-performance',
    });
    document.body.appendChild(this.app.view as HTMLCanvasElement);
    this.pepperAmount = 500;

    for (let x = 0; x < this.pepperAmount; x++) {
      let x = Math.random() * window.innerWidth;
      let y =
        Math.random() * window.innerHeight -
        Math.random() * window.innerHeight * 2;
      let scale = Math.random() * 0.4;

      this.peppers.push({
        x,
        y,
        scale,
        left: Math.random() > 0.5,
        rotation: -1 + Math.random() * 2,
      });
    }

    this.peppers.sort((a, b) => {
      return a.scale - b.scale;
    });

    this.peppers.forEach((pepper) => {
      pepper.object = this.createPepper(pepper.x, pepper.y, pepper.scale);
    });

    this.app.ticker.add(() => {
      this.peppers.forEach((pepper) => {
        pepper.object!.rotation += pepper.rotation * 0.005;
        pepper.y += pepper.scale * 1;
        if (pepper.y > window.innerHeight) {
          pepper.y = -100;
        }
        pepper.object!.y = pepper.y;
      });
    });
  }

  public getApplication(): PIXI.Application {
    return this.app;
  }

  public createPepper(x: number, y: number, scale: number) {
    let textStyle = new PIXI.TextStyle({
      fontSize: 100,
    });
    let text = new PIXI.Text('🌶️', textStyle);
    let texture = this.app.renderer.generateTexture(text);
    let sprite = new PIXI.Sprite(texture);
    sprite.x = x;
    sprite.y = y;
    sprite.scale.x = scale;
    sprite.scale.y = scale;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
    sprite.rotation = Math.random() * Math.PI * 2;
    // sprite.tint = Math.random() * 0xffffff;
    // sprite.alpha = 0.5;
    // sprite.blendMode = PIXI.BLEND_MODES.ADD;

    this.app.stage.addChild(sprite);
    return sprite;
  }
}


const pixi = new Pixi();


</script>
