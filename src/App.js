import logo from './logo.svg';
import './App.css';
import MainItem from './Components/MainItem/MainItem';
import ListItem from './Components/ListItem/ListItem';
//import Argument1 from './Components/Argument1/Argument1';
import Argument2 from './Components/Argument2/Argument2';
//import Summary from './Components/Summary/Summary.component';
import TopicsList from './Components/TopicsList/TopicsList';
import Heading from './Components/Heading/Heading.container';
//import Heading from './Components/Heading/Heading.component';
import Argument1 from './Components/Argument1/Argument1.container';
import Summary from './Components/Summary/Summary.container';

import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({
    argumentsList: [],
  });

  const addArgument = (name, weight) => {
    const currentArgumentsList = state.argumentsList;

    setState({
      ...state,
      argumentsList: [...currentArgumentsList, { name, weight }],
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <MainItem />
        <ListItem />
        <Argument1 addArgument={addArgument} />
        <Argument2 />
        <Summary argumentsList={state.argumentsList} />
        <TopicsList />
      </header>
    </div>
  );
}

export default App;
