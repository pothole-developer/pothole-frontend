import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import Filter from 'assets/images/filter.svg?react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const FilterButton: Story = {
  args: {
    onClick: () => alert('click'),
    background: '#257CFF',
    color: '#FFFFFF',
    width: '100px',
    text: '필터',
  },
  render: (args) => (
    <Button {...args}>
      <Filter />
    </Button>
  ),
};
