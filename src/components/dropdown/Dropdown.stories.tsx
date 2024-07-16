import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const DropdownTest: Story = {
  render: () => <Dropdown dropdownList={['a', 'b']} onChange={() => alert('selected')} value="select"></Dropdown>,
};
