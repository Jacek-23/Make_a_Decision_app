import React from 'react';

class ListItem extends React.Component {
  render() {
    return (
      <section
        className="user-manual"
        id="my-user-manual"
        name="my-user-manual"
      >
        <div className="container">
          <h3 className="preface" id="my-preface">
            Przy kawie bądź herbacie przez debaty, rozważania dojdź do swego
            rozwiązania i podejmij dla siebie rozsądną decyzję
          </h3>
          <ol type="1">
            <li>Wpisz temat swoich rozważań.</li>
            <li>
              Wpisz argumenty przemawiające "ZA" podjęciem decyzji na tak i
              ustal równocześnie jak bardzo każdy z nich jest dla Ciebie ważny.
            </li>
            <li>
              Wprowadź argumenty przemawiające "PRZECIW" podjęciem decyzji na
              nie i również tu ustal równocześnie jak bardzo każdy z nich jest
              dla Ciebie ważny.
            </li>
            <li>
              Przejdź do "WAGA", a zobaczysz swoją listę argumentów "ZA" i
              "PRZECIW". Możesz tu wprowadzić ewentualne poprawki.
            </li>
            <li>
              Na koniec wciśnij "DECYZJA" i 'Eureka' - masz swoje rozwiązanie.
              Możesz dopić kawę bądź herbatę :-)
            </li>
            <div>_______________</div>
            <div>
              Pamiętaj, że argumentów "ZA" i "PPRZECIW" nie musisz mieć tyle
              samo.
            </div>
          </ol>
        </div>
        <div className="back" id="my-back">
          <a
            className="btn-back"
            id="btn-back"
            name="my-btn-back"
            href="#Main-box"
          >
            POWRÓT
          </a>
        </div>
      </section>
    );
  }
}

export default ListItem;
