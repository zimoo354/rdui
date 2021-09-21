import { Meta, Story } from '@storybook/react';
import * as TemplateButton from './Button';

export default {
  title: 'Components/Button',
  component: TemplateButton.default,
} as Meta;

const Template: Story = (args) => <TemplateButton.default {...args} />;

export const Button = Template.bind({});
Button.args = { variant: 'primary', children: 'Click me' };
