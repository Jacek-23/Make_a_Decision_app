import logo from './logo.svg';
import './App.css';
import MainItem from './Components/MainItem/MainItem';
import ListItem from './Components/ListItem/ListItem';
//import Heading from './Components/Heading/Heading.component';
//import Argument1 from './Components/Argument1/Argument1.component';
//import Argument2 from './Components/Argument2/Argument2.component';
//import Summary from './Components/Summary/Summary.component';
import TopicsList from './Components/TopicsList/TopicsList';
import Heading from './Components/Heading/Heading.container';
import Argument1 from './Components/Argument1/Argument1.container';
import Argument2 from './Components/Argument2/Argument2.container';
import Summary from './Components/Summary/Summary.container';

import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({
    argumentsList: [],
    argumentsList2: [],
  });

  const addArgument = (name, weight) => {
    const currentArgumentsList = state.argumentsList;
    const currentArgumentsList2 = state.argumentsList2;

    setState({
      ...state,
      argumentsList: [...currentArgumentsList, { name, weight }],
      argumentsList2: [...currentArgumentsList2, { name, weight }],
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <MainItem />
        <ListItem />
        <Argument1 addArgument={addArgument} />
        <Argument2 addArgument={addArgument} />
        <Summary
          argumentsList={state.argumentsList}
          argumentsList2={state.argumentsList2}
        />
        <TopicsList />
      </header>
    </div>
  );
}

export default App;
