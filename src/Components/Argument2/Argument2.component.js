import React from 'react';

function Argument2(props) {
  const { onChange, value, onSubmit } = props;
  return (
    <section className="against" id="my-against" name="my-against">
      <form className="against-feature" id="against-feature">
        <h3 className="feature-title2">PRZECIW</h3>
        <button
          type="submit"
          className="feature-circle"
          id="feature-circle"
        ></button>
      </form>
      <form action="*">
        <label className="argument">Argument </label>
        <input
          onChange={onChange}
          value={value}
          id="name"
          type="text"
          name="argument"
        />
        <label for="importance" className="importance">
          {' '}
          Waga{' '}
        </label>
        <select onChange={onChange} value={value} id="weight">
          <option value="-1">- 1 -</option>
          <option value="-2">- 2 -</option>
          <option value="-3">- 3 -</option>
          <option value="-4">- 4 -</option>
          <option value="-5">- 5 -</option>
          <option value="-6">- 6 -</option>
        </select>
        <button
          onClick={onSubmit}
          type="submit"
          className="against-button"
          id="against-button"
        >
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
              <h5 className="weight-title2">Istotne</h5>
              <div className="weight-circle" id="weight-circle">
                <h2>1</h2>
              </div>
            </article>
            <article className="weight">
              <h5 className="weight-title2">Dość istotne</h5>
              <div className="weight-circle" id="weight-circle">
                <h2>2</h2>
              </div>
            </article>
            <article className="weight">
              <h5 className="weight-title2">Ważne</h5>
              <div className="weight-circle" id="weight-circle">
                <h2>3</h2>
              </div>
            </article>
            <article className="weight">
              <h5 className="weight-title2">Bardzo ważne</h5>
              <div className="weight-circle" id="weight-circle">
                <h2>4</h2>
              </div>
            </article>
            <article className="weight">
              <h5 className="weight-title2">Priorytet</h5>
              <div className="weight-circle" id="weight-circle">
                <h2>5</h2>
              </div>
            </article>
            <article className="weight">
              <h5 className="weight-title2">Najważniejszy priorytet</h5>
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

export default Argument2;
