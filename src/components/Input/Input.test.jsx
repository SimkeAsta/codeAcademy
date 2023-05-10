import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import userEvent from "@testing-library/user-event";

describe('Input', () => {
    test('render without errors', () => {
        const MOCK_LABEL = 'Default label';
        render(<Input label={MOCK_LABEL} />);

        expect(screen.getByLabelText(MOCK_LABEL)).toBeInTheDocument();
    });

    test('calls onChange when change happens', () => {
        const mockedOnChange = jest.fn();
        const MOCK_LABEL = 'Default label';
        render(<Input onChange={mockedOnChange} label={MOCK_LABEL} />);

        const input = screen.getByLabelText(MOCK_LABEL);
        const MOCK_INPUT_VALUE = 'Test 123';
        userEvent.type(input, MOCK_INPUT_VALUE);

        expect(input).toHaveValue(MOCK_INPUT_VALUE);
        expect(mockedOnChange).toHaveBeenCalled();
    });

    test('<label> exists when label property is passed', () => {
        const MOCK_LABEL = 'Test 123';
        render(<Input label={MOCK_LABEL} />);

        const input = screen.getByLabelText(MOCK_LABEL);

        expect(input).toBeInTheDocument();
    });

    test('<label> does not exist when label property is not passed', () => {
        render(<Input />);        

        const label = screen.queryByTestId('input-label');

        expect(label).not.toBeInTheDocument();
    });
});