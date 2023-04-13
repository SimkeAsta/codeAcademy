import { StyledHeader, LoginContainer, StyledInput, StyledButton, StyledForm } from './styles/StyledLogin';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();

  const handleOnSubmit = () => {
    navigate("/products");
  }


  return (
    <>
    <button onClick={() => navigate(-1)}>Go Back</button>
    <LoginContainer>
      <div style={{ width: "500px"}}>
      <StyledHeader>
        <h2><b>Login to our site</b></h2>
        <p>Please enter email and password to login</p>
      </StyledHeader>
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledInput type="email" placeholder="youremail@gmail.com" />
        <StyledInput type="password" placeholder="*********" />
        <StyledButton className="btn">LOGIN</StyledButton>
      </StyledForm>
      </div>
      <p>Don't have an account yet? <Link to="/register" >Register HERE</Link></p>
    </LoginContainer>
    </>
  );
};
