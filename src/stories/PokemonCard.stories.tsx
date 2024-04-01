import type { Meta, StoryObj } from "@storybook/react";
import { PokemonCard } from "../components/PokemonCard";
import { IPokemon } from '../interfaces/pokemon';
import { mockPokemon } from "../__mocks__/mockData";

const pokemon: IPokemon = mockPokemon

const meta = {
  title: "Components/PokemonCard",
  component: PokemonCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pokemon: mockPokemon,
  },
};

export const MultipleTypes: Story = {
  args: {
    // Add a second type to the pokemon object
    pokemon: {
      ...pokemon,
      types: [...pokemon.types, { slot: 3, type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" } }],
    },
  },
};

export const NoImage: Story = {
  args: {
    pokemon: {
      ...pokemon,
      sprites: {other: undefined},
    },
  },
};