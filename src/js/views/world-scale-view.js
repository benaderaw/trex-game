import { WORLD_WIDTH, WORLD_HEIGHT } from "../config";

class WorldScale {
  worldElem = document.querySelector("[data-world]");

  setPixelToWorldScale() {
    let worldToPixelScale;

    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
      this.worldToPixelScale = window.innerWidth / WORLD_WIDTH;
    } else {
      this.worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
    }

    this.worldElem.style.width = `${WORLD_WIDTH * this.worldToPixelScale}px`;
    this.worldElem.style.height = `${WORLD_HEIGHT * this.worldToPixelScale}px`;
  }

  worldScaleResizeHandler() {
    window.addEventListener("resize", this.setPixelToWorldScale.bind(this));
  }
}

export default new WorldScale();
