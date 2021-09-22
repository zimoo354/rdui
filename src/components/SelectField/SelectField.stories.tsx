import { Meta, Story } from '@storybook/react';
import { SelectFieldProps } from 'types';
import * as TemplateSelectField from './SelectField';

export default {
  title: 'Components/SelectField',
  component: TemplateSelectField.default,
} as Meta;

const Template: Story<SelectFieldProps> = (args: SelectFieldProps) => (
  <TemplateSelectField.default {...args} />
);

export const SelectField = Template.bind({});

SelectField.args = {
  variant: 'v1',
  label: 'Country',
  helpText: 'Select a country',
  error: '',
  children: (
    <>
      <option>USA</option>
      <option>Canada</option>
      <option>Mexico</option>
    </>
  ),
};
