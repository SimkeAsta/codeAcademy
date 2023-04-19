import { MainBox, StyledHeader, LoginContainer, StyledInput, StyledButton, StyledForm } from './styles/StyledLogin';
import { Link, useNavigate } from 'react-router-dom';

export const Login = ({ onLogin }) => {

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate("/products");
  }

  return (
    <>
    <button onClick={() => navigate(-1)}>Go Back</button>
    <LoginContainer>
      <MainBox>
      <StyledHeader>
        <h2><b>Login to our site</b></h2>
        <p>Please enter email and password to login</p>
      </StyledHeader>
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledInput type="email" placeholder="youremail@gmail.com" />
        <StyledInput type="password" placeholder="*********" />
        <StyledButton className="btn">LOGIN</StyledButton>
      </StyledForm>
      </MainBox>
      <p>Don't have an account yet? <Link to="/register" >Register HERE</Link></p>
    </LoginContainer>
    </>
  );
};
