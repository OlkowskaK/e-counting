import React, { useState } from "react";
import "./WhyUsCss.css";

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const reasons = [
    {
      title: "Specjalistyczna wiedza i doświadczenie",
      content:
        "e-counting oferuje precyzyjną wykładnię przepisów prawnych oraz wsparcie w interpretacji prawa pracy i gospodarczego. Dzięki temu zapewniają swoim klientom pewność, że działają zgodnie z obowiązującymi regulacjami, co pozwala uniknąć błędów oraz nieporozumień.",
    },
    {
      title: "Indywidualne podejście",
      content:
        "Firma dostosowuje swoje usługi do specyficznych potrzeb każdego klienta, niezależnie od tego, czy jest to mała firma, czy duże przedsiębiorstwo. Dzięki temu klienci otrzymują wsparcie idealnie dopasowane do ich sytuacji i wyzwań.",
    },
    {
      title: "Kompleksowa obsługa",
      content:
        "e-counting nie tylko pomaga w interpretacji przepisów, ale również wspiera w sporządzaniu dokumentacji prawnej oraz oferuje usługi doradztwa prawnego, co umożliwia kompleksową obsługę prawną firmy.",
    },
    {
      title: "Zaufanie i profesjonalizm",
      content:
        "Zaufanie i profesjonalizm to kluczowe wartości e-counting, które zdobyli dzięki wieloletniej pracy z różnorodnymi klientami. Dzięki temu klienci mogą być pewni, że ich sprawy są w dobrych rękach.",
    },
  ];

  return (
    <section className="WhyChooseUs">
      <h2>Dlaczego warto wybrać e-counting?</h2>
      <div className="accordion">
        {reasons.map((reason, index) => (
          <div key={index} className="accordion-item">
            <button className="accordion-header" onClick={() => toggle(index)}>
              {reason.title}
            </button>
            <div
              className={`accordion-content ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <p>{reason.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
