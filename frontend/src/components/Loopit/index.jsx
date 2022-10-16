import "./Loopit.css";
import LoopList from "../LoopList";
import Aside from "./Aside";

const LoopitApp = () => {
  return (
    <>
      <main className="loops">
        <div className="loop-container">
          <LoopList endpoint="/loops/all" />
          <Aside />
        </div>
      </main>
    </>
  );
};

export default LoopitApp;
