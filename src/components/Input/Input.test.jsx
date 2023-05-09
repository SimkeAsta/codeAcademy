import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import userEvent from "@testing-library/user-event";

describe('Input', () => {
    test('render without errors', () => {
        render(<Input />);

        expect(screen.getByLabelText('Default label')).toBeInTheDocument();
    });

    test('calls onChange when change happens', () => {
        const mockedOnChange = jest.fn();
        render(<Input onChange={mockedOnChange} />);

        const input = screen.getByLabelText('Default label');
        const MOCK_INPUT_VALUE = 'Test 123';
        userEvent.type(input, MOCK_INPUT_VALUE);

        expect(input).toHaveValue(MOCK_INPUT_VALUE);
        expect(mockedOnChange).toHaveBeenCalled();
    });
});