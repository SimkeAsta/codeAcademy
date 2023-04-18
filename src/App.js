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
import { Routes, Route, useNavigate } from 'react-router-dom';
import { HomePage } from './project-example/HomePage';
import { Login } from './project-example/Login';
import { NavBar } from './project-example/NavBar';
import { Register } from './project-example/Register';
import { ProductDetails } from './project-example/ProductDetails';
import { PageNotFound } from './project-example/PageNotFound';
import { Posts } from './project-example/posts/Posts';
import { Post } from './project-example/posts/Post';
import { Comments } from './project-example/posts/Comments';
import { IndexPost } from './project-example/posts/IndexPost';
import React, { useState } from 'react';
import Protected from './project-example/Protected';
import { CommentInfo } from './project-example/posts/CommentInfo';
import { CommentIndex } from './project-example/posts/CommentIndex';

const About = React.lazy(() => import('./project-example/About'));

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      {isSignedIn ? (<button onClick={() => setIsSignedIn(false)}>LOGOUT</button>) : 
                    (<button onClick={() => {
                      setIsSignedIn(true);
                      navigate("/");
                    }}>LOGIN</button>)
                    }
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login setIsSignedIn={setIsSignedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route element={<Protected isSignedIn={isSignedIn} />}>
          <Route
            path="/about"
            element={
              <React.Suspense
                fallback={<div>Showing while component loads</div>}
              >
                <About />
              </React.Suspense>
            }
          />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
         
          <Route element={<Protected isSignedIn={isSignedIn} />}>
          <Route path="/posts" element={<Posts />}>
            <Route index element={<IndexPost />} />
            <Route path=":postId" element={<Post />}>
              <Route path="comments" element={<Comments />}>
                <Route index element={<CommentIndex />} />
                <Route path="commentInfo" element={<CommentInfo />} />
              </Route>
            </Route>
          </Route>
        </Route>
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
