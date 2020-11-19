import './App.css';
import Header from './Components/Header.js'
import UserContainer from './Components/UserContainer'

//This part is essentially done. any changes to Header or UserContainer will change our page!!!

function App() {
  return (
    <div className="App">
      <Header />
      <UserContainer/>
    </div>
  );
}

export default App;
