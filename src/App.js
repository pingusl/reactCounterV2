import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Counter</h1>
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
