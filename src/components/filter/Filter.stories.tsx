import { Meta, StoryObj } from '@storybook/react';
import { Filter } from './Filter';

const meta: Meta<typeof Filter> = {
  title: 'Filter',
  component: Filter,
};
export default meta;

type Story = StoryObj<typeof Filter>;
export const FilterComponents: Story = {
  render: () => <Filter />,
};
