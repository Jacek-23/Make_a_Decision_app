import logo from './logo.svg';
import './App.css';
//import Heading from './Components/Heading/Heading';
import MainItem from './Components/MainItem/MainItem';
import ListItem from './Components/ListItem/ListItem';
//import Argument1 from './Components/Argument1/Argument1';
import Argument2 from './Components/Argument2/Argument2';
//import Summary from './Components/Summary/Summary.component';
import Database from './Components/Database/Database';
import Heading from './Components/Heading/Heading.container';
import Argument1 from './Components/Argument1/Argument1.container';
import Summary from './Components/Summary/Summary.container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <MainItem />
        <ListItem />
        <Argument1 />
        <Argument2 />
        <Summary />
        <Database />
      </header>
    </div>
  );
}

export default App;
