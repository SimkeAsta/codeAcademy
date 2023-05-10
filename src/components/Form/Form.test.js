import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe('Form', () => {
    test('renders correctly without errors', () => {
        render(<Form />);

        const form = screen.getByRole('form', { name: '' });

        expect(form).toBeInTheDocument();
    });
});