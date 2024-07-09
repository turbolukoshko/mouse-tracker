import { PanelMouseLogger } from "./components/PanelMouseLogger/PanelMouseLogger";
import { PointMouseLogger } from "./components/PointMouseLogger/PointMouseLogger";

import "./App.css";
import { IconMouse } from "./components/shared/SVG/IconMouse/IconMouse";

function App() {
  return (
    <div className="App">
      <h2 className="Header">Mouse Tracker</h2>
      <IconMouse />
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
