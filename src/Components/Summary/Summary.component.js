import React from 'react';

function Summary(props) {
  const { onChange, value, onSubmit } = props;
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
      </div>
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
                <input
                type="text" 
                name="arguments" />
                <label for="validity"></label>
                <select
                onChange={onChange} 
                value={value}
                id="validity">
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
                  <option value="Bardzo ważny priorytet">- 6 - Najważniejszy priorytet</option>
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
                  <option value="Bardzo ważny priorytet">- 6 - Najważniejszy priorytet</option>
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
                  <option value="Bardzo ważny priorytet">- 6 - Najważniejszy priorytet</option>
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
                  <option value="Bardzo ważny priorytet">- 6 - Najważniejszy priorytet</option>
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
                  <option value="Bardzo ważny priorytet">- 6 - Najważniejszy priorytet</option>
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
              className="arguments" />
            </td>
            <td className="four">
              <label> Suma: </label>
              <input type="text" className="arguments" />
            </td>
          </tr>
        </tfoot>
      </table>
      <form className="shape" id="my-shape">
        <div className="end-triangle" id="end-triangle">
          <button onClick={onSubmit} type="submit" className="lower-title" id="lower-title">
            DECYZJA
          </button>
        </div>
      </form>
    </section>
  );
}

export default Summary;
