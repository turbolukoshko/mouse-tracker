import { FC } from "react";
import { MousePosition } from "../HOC/MousePosition/MousePosition";
import "./PanelMouseLogger.css";

export const PanelMouseLogger: FC = () => {
  return (
    <div>
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="panel-mouse-logger">
            <p className="panel-mouse-logger-paragraph">
              x: {mousePosition.x}, y: {mousePosition.y}
            </p>
          </div>
        )}
      />
    </div>
  );
};
