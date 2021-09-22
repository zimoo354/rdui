import { Meta, Story } from '@storybook/react';
import * as TemplateSelect from './Select';

export default {
  title: 'Components/Select',
  component: TemplateSelect.default,
} as Meta;

const Template: Story = (args) => <TemplateSelect.default {...args} />;

export const Select = Template.bind({});

Select.args = {
  variant: 'v1',
  disabled: false,
  invalid: false,
  children: (
    <>
      <option>USA</option>
      <option>Canada</option>
      <option>Mexico</option>
    </>
  ),
};
