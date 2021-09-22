import { Meta, Story } from '@storybook/react';
import { InputFieldProps } from 'types';
import * as TemplateInputField from './InputField';

export default {
  title: 'Components/InputField',
  component: TemplateInputField.default,
} as Meta;

const Template: Story<InputFieldProps> = (args: InputFieldProps) => (
  <TemplateInputField.default {...args} />
);

export const InputField = Template.bind({});

InputField.args = {
  variant: 'v1',
  label: 'First name',
  helpText: 'This is supposed to be a hint',
  error: '',
};
