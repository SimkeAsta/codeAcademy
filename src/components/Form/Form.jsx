import { Input } from "../Input/Input";
import { Button } from '../Button/Button';

export const Form = ({ onSubmit }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e);
    }

    return (
        <form data-testid="form" onSubmit={handleSubmit}>
            <Input label="Username" required />
            <Input label="Password" required />

            <Button text="Login" />
        </form>
    )
}