import logo from './ca-logo.png';
import './App.css';
import Header from './Header';
import { ProductList } from './components/ProductList';

function App() {

  const onPetrasHeaderClick = () => {
    alert('Petras header button clicked!');
  }

  return (
    <div className="App">
      
      <Header name="Martynas" onClick={() => console.log('Header button clicked')}>
        <img src={logo} className="App-logo" alt="logo" />
      </Header>
      
      
      <Header name="Petras" onClick={onPetrasHeaderClick} />
      
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Codeacademy.lt React paskaita!
        </p>
        <a
          className="App-link"
          href="https://codeacademy.lt/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codeacademy
        </a> */}
        <ProductList />
      </header>
    </div>
  );
}

export default App;
