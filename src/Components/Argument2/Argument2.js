import React from 'react';

class Argument2 extends React.Component {
  render() {
    return (
      <section className="against" id="my-against" name="my-against">
        <form className="against-feature" id="against-feature">
          <h3 className="feature-title">PRZECIW</h3>
          <button
            type="submit"
            className="feature-circle"
            id="feature-circle"
          ></button>
        </form>
        <form action="*">
          <label>Argument </label>
          <input type="text" name="argument" />
          <label for="importance"> Waga </label>
          <select id="importance">
            <option value="Istotne">- 1 - Istotne</option>
            <option value="Dość istotne">- 2 - Dość istotne</option>
            <option value="Ważne">- 3 - Ważne</option>
            <option value="Bardzo ważne">- 4 - Bardzo ważne</option>
            <option value="Priorytet">- 5 - Priorytet</option>
            <option value="Bardzo ważny priorytet">
              - 6 - Najważniejszy priorytet
            </option>
          </select>
          <button type="submit" className="against-button" id="against-button">
            _NEXT_
          </button>
        </form>
        <section
          className="against-weights"
          id="my-against-weights"
          name="my-against-weights"
        >
          <div className="conteiner">
            <div className="weights-wrapper">
              <article className="weight">
                <h5 className="weight-title">Istotne</h5>
                <div className="weight-circle" id="weight-circle">
                  <h2>1</h2>
                </div>
              </article>
              <article className="weight">
                <h5 className="weight-title">Dość istotne</h5>
                <div className="weight-circle" id="weight-circle">
                  <h2>2</h2>
                </div>
              </article>
              <article className="weight">
                <h5 className="weight-title">Ważne</h5>
                <div className="weight-circle" id="weight-circle">
                  <h2>3</h2>
                </div>
              </article>
              <article className="weight">
                <h5 className="weight-title">Bardzo ważne</h5>
                <div className="weight-circle" id="weight-circle">
                  <h2>4</h2>
                </div>
              </article>
              <article className="weight">
                <h5 className="weight-title">Priorytet</h5>
                <div className="weight-circle" id="weight-circle">
                  <h2>5</h2>
                </div>
              </article>
              <article className="weight">
                <h5 className="weight-title">Najważniejszy priorytet</h5>
                <div className="weight-circle" id="weight-circle">
                  <h2>6</h2>
                </div>
              </article>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Argument2;
