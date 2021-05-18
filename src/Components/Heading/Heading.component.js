import React from 'react';

function Heading(props) {
  const { onChange, value, onSubmit } = props;
  return (
    <div className="Main-box" id="Main-box">
      <h1>TEMAT ROZWAŻAŃ</h1>
      <input
        onChange={onChange}
        value={value}
        type="text"
        id="my-input"
        name="my-input"
      />
      <button onClick={onSubmit} type="submit" className="main-button">
        _OK_
      </button>
    </div>
  );
}

export default Heading;
