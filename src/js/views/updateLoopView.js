class UpdateLoop {
  updateTime() {
    let lastTime;

    function update(time) {
      if (lastTime === null) {
        lastTime = time;
        window.requestAnimationFrame(update);
        return;
      }

      const delta = time - lastTime;
      //console.log(delta);

      lastTime = time;
      window.requestAnimationFrame(update);
    }

    window.requestAnimationFrame(update);
  }
}

export default new UpdateLoop();
