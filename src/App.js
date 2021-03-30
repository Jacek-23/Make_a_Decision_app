import logo from './logo.svg';
import './App.css';

function Heading() {
  return (
    <div className="Main-box">
      <h1>TEMAT ROZWAŻAŃ</h1>
      <input type="text" id="my-input" name="my-input"></input>
    </div>
  );
}
        
function Comment() {
  return (
    <section className="features" id="my-features" name="my-features">
      <div className="container">
        <div className="features-wrapper">
          <article className="feature">
            <h3 className="feature-title">Za</h3>
            <div className="feature-circle" id="feature-circle"></div>
          </article>
          <article className="feature">
            <h3 className="feature-title">Przeciw</h3>
            <div className="feature-circle" id="feature-circle"></div>
          </article>
        </div>
        <section className="shapes" id="my-shapes" name="my-shapes">
          <article className="shape">
            <div className="upper-triangle" id="upper-triangle">
              <h3 className="upper-title" id="upper-title">WAGA</h3>
            </div>
          </article>
          <article className="shape">
            <div className="lower-triangle" id="lower-triangle">
              <h3 className="lower-title" id="lower-title">DECYZJA</h3>
            </div>
          </article>
        </section>
        <a className="btn btn-solid" id="my-btn btn-solid" name="my-btn-solid" href="#my-user-manual">Instrukcja wykonania</a>
      </div> 
    </section>
  );
}

function ListItem() {
  return (
    <section className="user-manual" id="my-user-manual" name="my-user-manual">
      <div className="container">
        <h3 className="preface" id="my-preface">Przy kawie bądź herbacie przez debaty, rozważania dojdź do swego rozwiązania i podejmij dla siebie rozsądną decyzję</h3>
        <ol type="1">
        <li>Wpisz temat swoich rozważań.</li>
        <li>Wpisz argumenty przemawiające "ZA" podjęciem decyzji na tak i ustal równocześnie jak bardzo każdy z nich jest dla Ciebie ważny.</li>
        <li>Wprowadź argumenty przemawiające "PRZECIW" podjęciem decyzji na nie i również tu ustal równocześnie jak bardzo każdy z nich jest dla Ciebie ważny.</li>
        <li>Przejdź do "WAGA", a zobaczysz swoją listę argumentów "ZA" i "PRZECIW". Możesz tu wprowadzić ewentualne poprawki.</li>
        <li>Na koniec wciśnij "DECYZJA" i 'Eureka' - masz swoje rozwiązanie. Możesz dopić kawę bądź herbatę :-)</li>
        <div>_______________</div>
        <div>Pamiętaj, że argumentów "ZA" i "PPRZECIW" nie musisz mieć tyle samo.</div>
        </ol>
      </div>  
    </section>
  );
}

function Argument1() {
  return (
    <section className="for" id="my-for" name="my-for">
      <h1>ZA</h1>
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
          <option value="Bardzo ważny priorytet">- 6 - Najważniejszy priorytet</option>
        </select>
        <button type="submit">_NEXT_</button>
      </form>
      <section className="for-weights" id="my-for-weights" name="my-for-weights">
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

function Argument2() {
  return (
    <section className="against" id="my-against" name="my-against">
      <h1>PRZECIW</h1>
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
          <option value="Bardzo ważny priorytet">- 6 - Najważniejszy priorytet</option>
        </select>
        <button type="submit">_NEXT_</button>
      </form>
      <section className="against-weights" id="my-against-weights" name="my-against-weights">
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

function Summary() {
  return (
    <section className="list" id="my-list" name="my-list">
      <h1 className="caption" id="my-caption">WAGA <br></br> (lista argumentów)</h1>
      <table className="main-list" id="main-list">
        <thead>
          <tr>
            <th width="700px" height="50px">ZA</th>
            <th width="700px" height="50px">PRZECIW</th>
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
              <input type="text" className="arguments" />
            </td>
            <td className="four">
              <label> Suma: </label> 
              <input type="text" className="arguments" />
            </td>
          </tr> 
        </tfoot>
      </table>
      <article className="shape">
        <div className="end-triangle" id="end-triangle">
          <h3 className="end-title" id="end-title">DECYZJA</h3>
        </div>
      </article>
    </section>
  );
}
    

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Comment />
        <Heading />
        <ListItem />
        <Argument1 />
        <Argument2 />
        <Summary />
      </header>
    </div>
  );
}


export default App;
