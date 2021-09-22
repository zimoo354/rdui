import { Meta, Story } from '@storybook/react';
import * as TemplateLabel from './Label';

export default {
  title: 'Components/InputField',
  component: TemplateLabel.default,
} as Meta;

const Template: Story = (args) => <TemplateLabel.default {...args} />;

export const Label = Template.bind({});

Label.args = { children: 'Label text', required: false };
