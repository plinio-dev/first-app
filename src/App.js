import Prodotto from "./Product";

const primaCard = {
  nome: "10€ Amazon",
  img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f10846.jpg",
  prezzo: 2.16,
  costoFinale: 5,
};

const secondaCard = {
  nome: "Mascherine 50pz",
  img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f12022.jpg",
  prezzo: 8,
  costoFinale: 10.8,
};

function App() {
  return (
    <div className='App'>
      <h1>La nostra prima card </h1>
      <section className='card-section'>
        <Prodotto {...primaCard}></Prodotto>
        <Prodotto {...secondaCard}></Prodotto>
      </section>
    </div>
  );
}

export default App;
