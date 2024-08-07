import logo from "./logo-color.svg";
import praw from "./praw.jpg";
import "./App.css";
import ContactFormSection from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="imgLogo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <section className="HeroSection">
        <div className="overlay">
          <div className="HeroContent">
            <h1>
              Jeśli potrzebujesz porady prawnej z zakresu prawa pracy lub prawa
              spółek, wysoce wykwalifikowani specjaliści e-counting służą
              wsparciem dopasowanym do rodzaju działalności Twojej firmy! Naszym
              celem jest, aby nasi partnerzy czuli się pewni, że przestrzegają
              przepisów prawa podczas rozwijania swojego biznesu.
            </h1>
          </div>
        </div>
        <div className="HeroImg">
          <img src={praw} className="Hero-img" alt="prawo" />
        </div>
      </section>

      <section className="ProductSection">
        <h2>Dla każdego przedsiębiorcy</h2>
        <p>
          Niezależnie od tego, czy jesteś początkującym przedsiębiorcą, czy
          doświadczonym właścicielem firmy, możesz polegać na naszym
          doświadczeniu i wiedzy w dziedzinie biznesowo- prawnej.
        </p>
        <button className="buttonForm">CHCĘ SKORZYSTAĆ Z WASZEJ WIEDZY</button>
      </section>

      <section className="FeatureSection">
        <h2>Usługi doradztwa prawnego</h2>
        <div className="features">
          <div className="feature">
            <h3>Sporządzanie opinii prawniczej</h3>
          </div>
          <div className="feature">
            <h3>Sporządzanie dokumentacji prawnej</h3>
          </div>
          <div className="feature">
            <h3>Indywidualne usługi doradztwa prawnego</h3>
          </div>
        </div>
        <div className="consultations">
          <h3>Konsultacje w ramach interpretacji prawa</h3>
          <ul>
            <li>Interpretacja przepisów prawnych</li>
            <li>Interpretacja prawa pracy</li>
            <li>Interpretacja prawa gospodarczego</li>
          </ul>
        </div>
      </section>

      <section className="WhySection">
        <h2>Dlaczego warto wybrać e-counting?</h2>
        <p>Dołącz do naszego grona ponad 150 zadowolonych klientów!</p>
        <button className="buttonForm">CHCĘ Z WAMI WSPÓŁPRACOWAĆ</button>
        <div className="testimonials-slider">
          {/* Slider z opiniami klientów */}
        </div>
      </section>
      <ContactFormSection />
    </div>
  );
}

export default App;
