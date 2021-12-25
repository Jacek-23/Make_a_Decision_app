import React from 'react';

/*
function table() {
  <table className="main-list" id="main-list">
  <thead>
    <tr>
      <th width="700px" height="50px">
        ZA
      </th>
      <th width="700px" height="50px">
        PRZECIW
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="all-weight" id="all-weight">
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td className="one">
        <form action="*">
          <label> ⱱ </label>
          <input type="text" name="arguments" />
          <label for="validity"></label>
          <select onChange={onChange} value={value} id="validity">
            <option value="Istotne">- 1 - </option>
            <option value="Dość istotne">- 2 -</option>
            <option value="Ważne">- 3 -</option>
            <option value="Bardzo ważne">- 4 -</option>
            <option value="Priorytet">- 5 -</option>
            <option value="Bardzo ważny priorytet">- 6 -</option>
          </select>
        </form>
        <form action="*">
          <label> ⱱ </label>
          <input type="text" name="arguments" />
          <label for="validity"></label>
          <select id="validity">
            <option value="Istotne">- 1 - Istotne</option>
            <option value="Dość istotne">- 2 - Dość istotne</option>
            <option value="Ważne">- 3 - Ważne</option>
            <option value="Bardzo ważne">- 4 - Bardzo ważne</option>
            <option value="Priorytet">- 5 - Priorytet</option>
            <option value="Bardzo ważny priorytet">
              - 6 - Najważniejszy priorytet
            </option>
          </select>
        </form>
        <form action="*">
          <label> ⱱ </label>
          <input type="text" name="arguments" />
          <label for="validity"></label>
          <select id="validity">
            <option value="Istotne">- 1 - Istotne</option>
            <option value="Dość istotne">- 2 - Dość istotne</option>
            <option value="Ważne">- 3 - Ważne</option>
            <option value="Bardzo ważne">- 4 - Bardzo ważne</option>
            <option value="Priorytet">- 5 - Priorytet</option>
            <option value="Bardzo ważny priorytet">
              - 6 - Najważniejszy priorytet
            </option>
          </select>
        </form>
      </td>
      <td className="two">
        <form action="*">
          <label> ⱱ </label>
          <input type="text" name="arguments" />
          <label for="validity"></label>
          <select id="validity">
            <option value="Istotne">- 1 - Istotne</option>
            <option value="Dość istotne">- 2 - Dość istotne</option>
            <option value="Ważne">- 3 - Ważne</option>
            <option value="Bardzo ważne">- 4 - Bardzo ważne</option>
            <option value="Priorytet">- 5 - Priorytet</option>
            <option value="Bardzo ważny priorytet">
              - 6 - Najważniejszy priorytet
            </option>
          </select>
        </form>
        <form action="*">
          <label> ⱱ </label>
          <input type="text" name="arguments" />
          <label for="validity"></label>
          <select id="validity">
            <option value="Istotne">- 1 - Istotne</option>
            <option value="Dość istotne">- 2 - Dość istotne</option>
            <option value="Ważne">- 3 - Ważne</option>
            <option value="Bardzo ważne">- 4 - Bardzo ważne</option>
            <option value="Priorytet">- 5 - Priorytet</option>
            <option value="Bardzo ważny priorytet">
              - 6 - Najważniejszy priorytet
            </option>
          </select>
        </form>
        <form action="*">
          <label> ⱱ </label>
          <input type="text" name="arguments" />
          <label for="validity"></label>
          <select id="validity">
            <option value="Istotne">- 1 - Istotne</option>
            <option value="Dość istotne">- 2 - Dość istotne</option>
            <option value="Ważne">- 3 - Ważne</option>
            <option value="Bardzo ważne">- 4 - Bardzo ważne</option>
            <option value="Priorytet">- 5 - Priorytet</option>
            <option value="Bardzo ważny priorytet">
              - 6 - Najważniejszy priorytet
            </option>
          </select>
        </form>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td className="three">
        <label> Suma: </label>
        <input
          onChange={onChange}
          value={value}
          type="text"
          className="arguments"
        />
      </td>
      <td className="four">
        <label> Suma: </label>
        <input type="text" className="arguments" />
      </td>
    </tr>
  </tfoot>
</table>
}
*/

function Summary(props) {
  const { argumentsList, argumentsList2, onChange, value, onSubmit } = props;
  return (
    <section className="list" id="my-list" name="my-list">
      <form className="caption" id="my-caption">
        <div className="upper-triangle" id="upper-triangle">
          <button type="submit" className="upper-title" id="upper-title">
            WAGA
          </button>
        </div>
      </form>
      <div className="argument-list" id="my-argument-list">
        LISTA ARGUMENTÓW
        <div className="box-list" id="box-list">
          <div className="main-list" id="main-list">
            <div className="title-list" id="title-list">
              ZA
            </div>
            {argumentsList.map((argument, index) => (
              <div key={index}>
                <label className="yes" id="yes">
                  ⱱ {''}
                </label>
                {argument.name}
                <label for="validity"></label>
                <select
                  value={argument.weight}
                  className="validity"
                  id="validity"
                >
                  <option value="1">- 1 -</option>
                  <option value="2">- 2 -</option>
                  <option value="3">- 3 -</option>
                  <option value="4">- 4 -</option>
                  <option value="5">- 5 -</option>
                  <option value="6">- 6 -</option>
                </select>
              </div>
            ))}
          </div>

          <div className="main-list2" id="main-list2">
            <div className="title-list2" id="title-list2">
              PRZECIW
            </div>
            {argumentsList2.map((argument, index) => (
              <div key={index}>
                <label className="yes2" id="yes2">
                  ⱱ {''}
                </label>
                {argument.name}
                <label for="validity"></label>
                <select
                  value={argument.weight}
                  className="validity"
                  id="validity"
                >
                  <option value="-1">- 1 -</option>
                  <option value="-2">- 2 -</option>
                  <option value="-3">- 3 -</option>
                  <option value="-4">- 4 -</option>
                  <option value="-5">- 5 -</option>
                  <option value="-6">- 6 -</option>
                </select>
              </div>
            ))}
          </div>
        </div>
        <div className="box-list2" id="box-list2">
          <div className="main-list3">
            <label> Suma: </label>
            <input
              onChange={onChange}
              value={value}
              type="text"
              className="arguments"
            />
          </div>
          <div className="main-list4">
            <label className="sum" id="sum">
              {' '}
              Suma:{' '}
            </label>
            <input type="text" className="arguments" />
          </div>
        </div>
      </div>

      <div className="shape" id="my-shape">
        <div className="end-triangle" id="end-triangle">
          <button
            onClick={onSubmit}
            type="submit"
            className="lower-title"
            id="lower-title"
          >
            DECYZJA
          </button>
        </div>
      </div>
    </section>
  );
}

export default Summary;
