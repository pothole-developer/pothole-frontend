import type { Meta, StoryObj } from '@storybook/react';
import { ImportanceInput } from './Input';

const meta: Meta<typeof ImportanceInput> = {
  title: 'Input',
  component: ImportanceInput,
};
export default meta;

type Story = StoryObj<typeof ImportanceInput>;
export const ImportanceInput_: Story = {
  render: () => <ImportanceInput></ImportanceInput>,
};
