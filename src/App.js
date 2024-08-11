import logo from "./logo-color.svg";
import praw from "./praw.jpg";
import "./App.css";
import ContactFormSection from "./Form";
import TestimonialSlider from "./Slider";
import SliderPeople from "./Sliderpeople";
import WhyChooseUs from "./WhyUs";

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
          <img src={praw} alt="prawo" />
        </div>
      </section>

      <section className="ProductSection">
        <div className="ProductContent">
          <h2>Dla każdego przedsiębiorcy</h2>
          <p>
            Niezależnie od tego, czy jesteś początkującym przedsiębiorcą, czy
            doświadczonym właścicielem firmy, możesz polegać na naszym
            doświadczeniu i wiedzy w dziedzinie biznesowo- prawnej.
          </p>
        </div>

        <button className="buttonForm">CHCĘ SKORZYSTAĆ Z WASZEJ WIEDZY</button>
      </section>

      <section className="FeatureSection">
        <h2>Usługi doradztwa prawnego</h2>
        <div className="Future-section-main">
          <div className="features">
            <div className="feature">
              <h3>Sporządzanie opinii prawniczej</h3>
              <p>
                Dokładna analiza i interpretacja przepisów dla wsparcia Twoich
                decyzji biznesowych.
              </p>
            </div>
            <div className="feature">
              <h3>Sporządzanie dokumentacji prawnej</h3>
              <p>
                Profesjonalnie przygotowane dokumenty zgodne z aktualnymi
                przepisami prawa.
              </p>
            </div>
            <div className="feature">
              <h3>Indywidualne usługi doradztwa prawnego</h3>
              <p>
                Dostosowane do Twoich potrzeb doradztwo, które pomoże Ci
                rozwiązać złożone problemy prawne.
              </p>
            </div>
          </div>
          <div className="consultations">
            <h3>Konsultacje w ramach interpretacji prawa</h3>
            <ul>
              <li>
                <h4>Interpretacja przepisów prawnych</h4>
                <p>
                  Precyzyjna wykładnia przepisów, która pomoże uniknąć błędów i
                  nieporozumień w prowadzeniu działalności.
                </p>
              </li>
              <li>
                <h4>Interpretacja prawa pracy</h4>
                <p>
                  Wsparcie w zrozumieniu przepisów prawa pracy, aby zapewnić
                  zgodność z regulacjami i ochrona praw pracowników.
                </p>
              </li>
              <li>
                <h4>Interpretacja prawa gospodarczego</h4>
                <p>
                  Praktyczne doradztwo w zakresie prawa gospodarczego, aby Twoja
                  firma działała zgodnie z obowiązującymi normami.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="WhySection">
        <WhyChooseUs />
        <div className="reasonsButton">
          <div className="reasons">
            Dołącz do naszego grona ponad 150 zadowolonych klientów!
          </div>
          <button className="buttonForm">CHCĘ Z WAMI WSPÓŁPRACOWAĆ</button>
        </div>
        <div className="testimonials-slider">
          <TestimonialSlider slides={SliderPeople} />
        </div>
      </section>
      <ContactFormSection />
    </div>
  );
}

export default App;
