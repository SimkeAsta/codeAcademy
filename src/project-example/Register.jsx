import { MainBox, StyledHeader, LoginContainer, StyledInput, StyledButton, StyledForm } from './styles/StyledLogin';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });

  const onHandleSubmit = () => {
    alert(`${formData.name} ${formData.surname} registered with: ${formData.email}`);
  }

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const onNameChange = (e) => {
    setName(e.target.value)
  }


  return (
    <LoginContainer>
      <MainBox>
        <StyledHeader>
          <h2>
            <b>Have your account registered</b>
          </h2>
          <p>Please enter your details to register</p>
        </StyledHeader>
        <StyledForm onSubmit={onHandleSubmit}>
          <StyledInput
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleOnChange}
          />
          <StyledInput
            name="surname"
            type="text"
            placeholder="Surname"
            onChange={handleOnChange}
          />
          <StyledInput
            name="email"
            type="email"
            placeholder="youremail@gmail.com"
            onChange={handleOnChange}
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="*********"
            onChange={handleOnChange}
          />
          <StyledButton className="btn">REGISTER</StyledButton>
        </StyledForm>
      </MainBox>
      <p>
        Already have an account? <Link to="/login">Login HERE</Link>
      </p>
    </LoginContainer>
  );
};