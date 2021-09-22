import { Meta, Story } from '@storybook/react';
import * as TemplateInput from './Input';

export default {
  title: 'Components/Input',
  component: TemplateInput.default,
} as Meta;

const Template: Story = (args) => <TemplateInput.default {...args} />;

export const Input = Template.bind({});

Input.args = { variant: 'v1', disabled: false, invalid: false };
