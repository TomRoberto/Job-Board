import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Jobs from "./Jobs";

function App() {
  return (
    <div className="app">
      <Header name="The Job Board" />
      <Jobs />
      <Footer name="Tom ROBERTO" />
    </div>
  );
}

export default App;
