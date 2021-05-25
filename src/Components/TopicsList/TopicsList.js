import React from 'react';

function TopicsList(props) {
  return (
    <section className="database" id="my-database" name="my-database">
      <h3 className="title-database">BAZA TEMATÓW</h3>
      <div className="title-base" id="my-title-base">
        <div className="date" id="date">
          DATA
        </div>
        <div className="subject" id="my-subject">
          TEMAT
        </div>
        <div className="decision" id="my-decision">
          DECYZJA
        </div>
      </div>
      <div className="one-base" id="my-one-base">
        <form action="">
          <div className="one-mark" id="my-one-mark">
            <input
              type="checkbox"
              className="mark"
              id="my-mark"
              value="date-1"
            ></input>
          </div>
        </form>
        <div className="date-1" id="my-date-1">
          D1
        </div>
        <div className="subject-1" id="my-subject-1">
          T1
        </div>
        <div className="decision-1" id="my-decision-1">
          D1
        </div>
      </div>
      <div className="one-base" id="my-one-base">
        <form action="">
          <div className="one-mark" id="my-one-mark">
            <input
              type="checkbox"
              className="mark"
              id="my-mark"
              value="date-1"
            ></input>
          </div>
        </form>
        <div className="date-1" id="my-date-1">
          D2
        </div>
        <div className="subject-1" id="my-subject-1">
          T2
        </div>
        <div className="decision-1" id="my-decision-1">
          D2
        </div>
      </div>
      <div className="one-base" id="my-one-base">
        <form action="">
          <div className="one-mark" id="my-one-mark">
            <input
              type="checkbox"
              className="mark"
              id="my-mark"
              value="date-1"
            ></input>
          </div>
        </form>
        <div className="date-1" id="my-date-1">
          D3
        </div>
        <div className="subject-1" id="my-subject-1">
          T3
        </div>
        <div className="decision-1" id="my-decision-1">
          D3
        </div>
      </div>
      <div className="open" id="my-open" name="my=open">
        <button type="submit" className="open-button" id="my-open-button">
          _0TWÓRZ_
        </button>
        <button type="submit" className="remove-button" id="my-remove-button">
          _USUŃ_
        </button>
      </div>
      <div className="back" id="my-back">
        <a
          className="btn-backend"
          id="btn-backend"
          name="my-btn-backend"
          href="#Main-box"
        >
          POWRÓT
        </a>
      </div>
    </section>
  );
}

export default TopicsList;
