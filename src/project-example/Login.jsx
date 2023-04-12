import { LoginContainer } from './styles/StyledLogin';

export const Login = () => {
  return (
    <LoginContainer>
      <div>
        <div><b>Login to our site</b></div>
        <p>Please enter email and password to login</p>
      </div>
      <form>
        <input type="email" placeholder="youremail@gmail.com" />
        <input type="password" placeholder="*********" />
        <button className="btn btn-success">LOGIN</button>
      </form>
    </LoginContainer>
  );
};
