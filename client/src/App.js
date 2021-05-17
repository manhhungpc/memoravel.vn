import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import MemBox from "./components/MemBox/MemBox";
import Menu from "./components/Menu/Menu";
import SubcribeForm from "./components/SubcribeForm/SubcribeForm";
import mems from "./utils/mem";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <Menu />
        </div>
        <div className="body">
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <MemBox mem={mems[0]} />
                <MemBox mem={mems[1]} imageFirst />
                <MemBox mem={mems[2]} />
                <SubcribeForm />
              </>
            )}
          ></Route>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
