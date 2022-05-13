import './App.css';
import React from 'react';

class ListOfTasks extends React.Component {    
  render(){
    return (            
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Fedd the dogs</li>
      </ul>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ListOfTasks className="items"/>
    </div>
  );
}

export default App;


