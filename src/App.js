import logo from "./logo-color.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="imgLogo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <section className="HeroSection">
        <div>
          <h1>
            Jeśli potrzebujesz porady prawnej z zakresu prawa pracy lub prawa
            spółek, wysoce wykwalifikowani specjaliści e-counting służą
            wsparciem dopasowanym do rodzaju działalności Twojej firmy! Naszym
            celem jest, aby nasi partnerzy czuli się pewni, że przestrzegają
            przepisów prawa podczas rozwijania swojego biznesu.
          </h1>
        </div>
      </section>
      <section className="ProductSection">
        <h2>Dla każdego przedsiębiorcy</h2>
        <h3>
          Niezależnie od tego, czy jesteś początkującym przedsiębiorcą, czy
          doświadczonym właścicielem firmy, możesz polegać na naszym
          doświadczeniu i wiedzy w dziedzinie biznesowo- prawnej.
        </h3>
      </section>
      <button className="buttonForm">CHCĘ SKORZYSTAĆ Z WASZEJ WIEDZY</button>
      <section className="FeatureSection">
        <div className="Label">
          <h2>Usługi doradztwa prawnego</h2>
          <div>
            - Sporządzanie opinii prawniczej. - Sporządzanie dokumentacji
            prawnej. - Indywidualne usługi doradztwa prawnego.
          </div>
        </div>
        <div className="Label">
          <h2>Konsultacje w ramach interpretacji prawa</h2>
          <div>
            - Interpretacja przepisów prawnych. - Interpretacja prawa pracy. -
            Interpretacja prawa gospodarczego.
          </div>
        </div>
      </section>
      <section className="WhySection">
        <h2>Dlaczego warto wybrać e-counting?</h2>
        <div>Dołącz do naszego grona ponad 150 zadowolonych klientów!</div>
      </section>
      <button className="buttonForm">CHCĘ Z WAMI WSPÓŁPRACOWAĆ</button>
    </div>
  );
}

export default App;
