import { Meta, Story } from '@storybook/react';
import * as TemplateButton from './RectangularButton';

export default {
  title: 'Components/Button',
  component: TemplateButton.default,
} as Meta;

const Template: Story = (args) => <TemplateButton.default {...args} />;

export const RectangularButton = Template.bind({});

RectangularButton.args = {
  variant: 'primary',
  children: 'Click me',
  disabled: false,
};
