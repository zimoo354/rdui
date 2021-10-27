import { Meta, Story } from '@storybook/react';
import * as TemplateAvatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: TemplateAvatar.default,
} as Meta;

const Template: Story = (args) => <TemplateAvatar.default {...args} />;

export const Avatar = Template.bind({});

Avatar.args = { variant: 'primary' };
