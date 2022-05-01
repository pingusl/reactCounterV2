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
// créez un state qui sera un tableau :
//const [counters, setCounters] = useState([0]);

// faites ensuite un .map dessus
// un .map permet de retourner quelque chose pour chacun des éléments du tableau sur lequel on map
// ici nous allons donc retourner une div avec deux bouttons et un span, pour chacun des chiffres de `counters`
{
  /* <section>
  {counters.map((item, index) => {
     return (
      <div>
        <button>-</button>
		<span>{item}</span>
        <button>+</button>
      </div>
     );
  })}
</section> */
}

// pour rajouter un compteur, il suffira donc de rajouter un élément dans notre tableau counters (via un push par exemple
