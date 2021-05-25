import React from 'react';

function Argument1(props) {
  const { onChange, value, onSubmit } = props;
  return (
    <section className="for" id="my-for" name="my-for">
      <form className="for-feature" id="for-feature">
        <h3 className="feature-title1">ZA</h3>
        <button
          type="submit"
          className="feature-circle"
          id="feature-circle"
        ></button>
      </form>
      <form action="*">
        <label>Argument </label>
        <input
          onChange={onChange}
          value={value}
          id="name"
          type="text"
          name="argument"
        />
        <label for="importance"> Waga </label>
        <select onChange={onChange} value={value} id="weight">
          <option value="1">- 1 -</option>
          <option value="2">- 2 -</option>
          <option value="3">- 3 -</option>
          <option value="4">- 4 -</option>
          <option value="5">- 5 -</option>
          <option value="6">- 6 -</option>
        </select>
        <button onClick={onSubmit} type="submit" className="for-button">
          _NEXT_
        </button>
      </form>
      <section
        className="for-weights"
        id="my-for-weights"
        name="my-for-weights"
      >
        <div className="conteiner">
          <div className="weights-wrapper">
            <article className="weight">
              <h5 className="weight-title">Istotne</h5>
              <bottom onClick={onSubmit} type="submint">
                <div className="weight-circle" id="weight-circle">
                  <h2>1</h2>
                </div>
              </bottom>
            </article>
            <article className="weight">
              <h5 className="weight-title">Dość istotne</h5>
              <bottom onClick={onSubmit} type="submit">
                <div className="weight-circle" id="weight-circle">
                  <h2>2</h2>
                </div>
              </bottom>
            </article>
            <article className="weight">
              <h5 className="weight-title">Ważne</h5>
              <bottom onClick={onSubmit} type="submit">
                <div className="weight-circle" id="weight-circle">
                  <h2>3</h2>
                </div>
              </bottom>
            </article>
            <article className="weight">
              <h5 className="weight-title">Bardzo ważne</h5>
              <bottom onClick={onSubmit} type="submit">
                <div className="weight-circle" id="weight-circle">
                  <h2>4</h2>
                </div>
              </bottom>
            </article>
            <article className="weight">
              <h5 className="weight-title">Priorytet</h5>
              <bottom onClick={onSubmit} type="submit">
                <div className="weight-circle" id="weight-circle">
                  <h2>5</h2>
                </div>
              </bottom>
            </article>
            <article className="weight">
              <h5 className="weight-title">Najważniejszy priorytet</h5>
              <bottom onClick={onSubmit} type="submit">
                <div className="weight-circle" id="weight-circle">
                  <h2>6</h2>
                </div>
              </bottom>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Argument1;
