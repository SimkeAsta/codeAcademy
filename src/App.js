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
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './project-example/HomePage';
import { Login } from './project-example/Login';
import { NavBar } from './project-example/NavBar';
import { Register } from './project-example/Register';
import { ProductDetails } from './project-example/ProductDetails';

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

  const handleOnChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <>
    <NavBar />
     <Routes>
      <Route path="*" element={<div>Page not found</div>} />
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id"  element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     </Routes>
    </>
    // <div className="App">
    //   <HomePage />
    //   <Login />
    //   {/* <StateButton />
    //   <TextInput />
    //   <MyCheckbox />
    //   <Form />
    //   <MoodChecker /> */}
    //   <Toolbar />

    //   {/* <form onSubmit={handleFormSubmit}>
    //     <input onChange={handleOnChange} />

    //     <button onKeyUp={handleSubmitButtonKeyup} onKeyDown={handleSubmitButtonKeydown}>Submit</button>
    //   </form>

    //   <button onClick={() => alert('Petras header button clicked!')}>
    //     Click me
    //   </button> */}

    //   <ProductList />
    // </div>
  );
}

export default App;
