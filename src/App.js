import Content from "components/Content";
import RightBar from "components/RightBar";
import Sidebar from "components/Sidebar";
import { BrowserRouter as Router, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <div className="max-w-7xl flex mx-auto h-screen text-white">
        <Switch>
        <Sidebar />
        </Switch>
        <Content />
        <RightBar />
      </div>
      </Router>
    </div>
  );
}

export default App;
