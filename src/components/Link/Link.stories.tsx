import { Meta, Story } from '@storybook/react';
import * as TemplateLink from './Link';

export default {
  title: 'Components/Link',
  component: TemplateLink.default,
} as Meta;

const Template: Story = (args) => (
  <TemplateLink.default target="_blank" rel="noopener noreferrer" {...args} />
);

export const Link = Template.bind({});

Link.args = {
  children: 'Link to account',
  href: 'https://example.com',
  disabled: false,
};
