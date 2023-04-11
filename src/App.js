import logo from './ca-logo.png';
import './App.css';
import Header from './Header';
// import { ProductList } from './components/ProductList';
import { StudentuSarasas } from './3-paskaita-list-rendering/komponentai/StudentuSarasas'
import { ProductList } from './project-example/ProductList'
import { StateButton } from './6-paskaita-useState/Button';
import { TextInput } from './6-paskaita-useState/TextInput';
import { MyCheckbox } from './6-paskaita-useState/Checkbox';
import { Form } from './6-paskaita-useState/Form';
import { MoodChecker } from './6-paskaita-useState/MoodChecker'
import { Modal, Button } from 'react-bootstrap';
import { Toolbar } from './components/Toolbar';

function App() {

  const onButtonClick = () => {
    alert('Petras header button clicked!');
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted');
  };

  const handleSubmitButtonKeydown = (e) => {
    console.log(e.code);
  }

  const handleSubmitButtonKeyup = () => {
    // console.log('Keyup event');
  }

  return (
    <div className="App">
      {/* <StateButton />
      <TextInput />
      <MyCheckbox />
      <Form />
      <MoodChecker /> */}
      <Toolbar />

      <form onSubmit={handleFormSubmit}>
        <input />

        <button onKeyUp={handleSubmitButtonKeyup} onKeyDown={handleSubmitButtonKeydown}>Submit</button>
      </form>

      <button onClick={() => alert('Petras header button clicked!')}>
        Click me
      </button>

      <ProductList />
    </div>
  );
}

export default App;
