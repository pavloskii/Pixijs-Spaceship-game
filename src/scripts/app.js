/*****************************************************

                    Main.js

*****************************************************/

var stage = new PIXI.Container();
PIXI.loader.add(["assets/cloud_1.png", "assets/cloud_2.png"]).load(init);

function init() {
  renderer.backgroundColor = 0x22a7f0;
  renderer.render(stage);
  loop();
}

function loop() {
  requestAnimationFrame(loop);
  renderer.render(stage);
}
