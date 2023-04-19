import { Link } from 'react-router-dom';

export const NavBar = ({ isSignedIn, onLogout }) => {

    return (
        <nav>
            <ul>
                {isSignedIn ? (
                    <>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
            {isSignedIn && (
                <button onClick={onLogout}>
                    LOGOUT
                </button>
            )}
        </nav>
    )
}