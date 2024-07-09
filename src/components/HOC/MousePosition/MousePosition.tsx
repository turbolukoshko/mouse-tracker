import { FC, useEffect, useState } from "react";

interface MousePositionProps {
  render: (props: {
    mousePosition: { x: number; y: number };
  }) => React.ReactNode;
}

interface MousePosition {
  x: number;
  y: number;
}

export const MousePosition: FC<MousePositionProps> = ({ render }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render({ mousePosition });
};
