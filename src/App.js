import Content from "components/Content";
import RightBar from "components/RightBar";
import Sidebar from "components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl flex mx-auto h-screen text-white">
        <Sidebar />
        <Content />
        <RightBar />
      </div>
    </div>
  );
}

export default App;
