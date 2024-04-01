import { mockPokemonList } from "@/src/__mocks__/mockPokemonList";
import { PokemonNotFound } from "../components/PokemonNotFound";

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/PokemonNotFound',
  component: PokemonNotFound,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    pokemon: [],
  },
} satisfies Meta<typeof PokemonNotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const notFoundPokemon: Story = {
  args: {
    pokemon: [],
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

