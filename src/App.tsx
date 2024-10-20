import "./App.css";
import MacWinBar from "./comp/window/macWinbar";
import bg from "../public/bg/cardbg.jpg";
function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="about rounded-t-xl"
      >
        <MacWinBar></MacWinBar>
      </div>
    </>
  );
}

export default App;
