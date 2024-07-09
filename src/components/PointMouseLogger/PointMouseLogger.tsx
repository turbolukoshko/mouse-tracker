import { FC } from "react";
import { MousePosition } from "../HOC/MousePosition/MousePosition";
import './PointMouseLogger.css'

export const PointMouseLogger: FC = () => {
  return (
    <div>
      <p>Mouse point:</p>

      <MousePosition
        render={({ mousePosition }) => (
          <p className="point-mouse-logger-paragraph">
            ({mousePosition.x}, {mousePosition.y})
          </p>
        )}
      />
    </div>
  );
};
