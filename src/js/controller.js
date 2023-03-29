import { WORLD_WIDTH, WORLD_HEIGHT } from "./config";
import worldScaleView from "./views/world-scale-view";

const init = function () {
  worldScaleView.worldScaleResizeHandler();
};

init();
