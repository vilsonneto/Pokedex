import { PokemonNotFound } from "../components/PokemonNotFound";

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/PokemonNotFound',
  component: PokemonNotFound,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pokemon: [],
  },
} satisfies Meta<typeof PokemonNotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFoundPokemon: Story = {
  args: {
    pokemon: [],
  },
};


