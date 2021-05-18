import React from 'react';

class MainItem extends React.Component {
  render() {
    return (
      <section className="features" id="my-features" name="my-features">
        <div className="container">
          <div className="features-wrapper">
            <form className="feature">
              <h3 className="feature-title">Za</h3>
              <button
                type="button"
                className="feature-circle"
                id="feature-circle"
                href="my-for"
              ></button>
            </form>
            <article className="feature">
              <h3 className="feature-title">Przeciw</h3>
              <button
                type="button"
                className="feature-circle"
                id="feature-circle"
              ></button>
            </article>
          </div>
          <section className="shapes" id="my-shapes" name="my-shapes">
            <article className="shape">
              <div className="upper-triangle" id="upper-triangle">
                <button type="submit" className="upper-title" id="upper-title">
                  WAGA
                </button>
              </div>
            </article>
            <article className="shape">
              <div className="lower-triangle" id="lower-triangle">
                <button type="button" className="lower-title" id="lower-title">
                  DECYZJA
                </button>
              </div>
            </article>
          </section>
        </div>
        <div className="solid-base" id="my-solid-base">
          <a
            className="btn-solid"
            id="btn-solid"
            name="my-btn-solid"
            href="#my-user-manual"
          >
            INSTRUKCJA
          </a>
          <a
            className="btn-base"
            id="btn-base"
            name="my-btn-base"
            href="#my-database"
          >
            BAZA TEMATÓW
          </a>
        </div>
      </section>
    );
  }
}

export default MainItem;
