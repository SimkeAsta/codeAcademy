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

function App() {

  const onPetrasHeaderClick = () => {
    alert('Petras header button clicked!');
  }

  return (
    <div className="App">
      <StateButton />
      <TextInput />
      <MyCheckbox />
      <Form />
      <MoodChecker />
      {/* <ProductList /> */}

    </div>
  );
}

export default App;
