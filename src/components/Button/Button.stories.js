import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' }
    }
}

export const Default = {
    args: {
        text: 'Test text'
    }
};