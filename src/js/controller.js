import { WORLD_WIDTH, WORLD_HEIGHT } from "./config";
import worldScaleView from "./views/world-scale-view";
import updateLoopView from "./views/updateLoopView";

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

const init = function () {
  worldScaleView.worldScaleResizeHandler();
  updateLoopView.updateTime();
};

init();
