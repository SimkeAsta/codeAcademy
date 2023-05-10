import { Input } from "./Input";

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        onChange: { action: 'change' }
    }
}

export const Default = {
    args: {
        label: 'Default label'
    }
};