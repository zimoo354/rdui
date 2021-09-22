import { Meta, Story } from '@storybook/react';
import * as TemplateHelpText from './HelpText';

export default {
  title: 'Components/HelpText',
  component: TemplateHelpText.default,
} as Meta;

const Template: Story = (args) => <TemplateHelpText.default {...args} />;

export const HelpText = Template.bind({});

HelpText.args = { invalid: false };
