import * as paper from "paper/dist/paper-full";
import React, { useLayoutEffect } from "react";
import usePaper from "hooks/usePaper";

/**
 * This is the component file that gives the canvas element to React
 * It will create the necessary actions to prepare for a new map to be drawn on the canvas.
 * It also is the file that should wipe the canvas and previous map files, Model and MapDrawer.
 */

function Paper() {
  const { screen } = usePaper();

  useLayoutEffect(() => {
    //TODO: not how I should handle this for production, fix after actual settlement creation using backend CRUD is done
    paper.install(window);
    paper.setup("paper-canvas");

    generateMap();
  }, [])

  return (
    <canvas
      id="paper-canvas"
      resize="true"
      style={{ width: screen.w + "px", height: screen.h + "px" }}
    />
  );
}

export default Paper;
