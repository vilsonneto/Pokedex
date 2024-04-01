import type { Meta, StoryObj } from "@storybook/react";
import {
  AnimatedTextWord,
  IAnimatedTextWord,
} from "../components/AnimatedTextWord";
import { InputType } from "zlib";

const meta = {
  title: "Components/AnimatedTextWord",
  component: AnimatedTextWord,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    text: {
      control: "text",
      defaultValue: "Hello, Storybook!",
    },
    splitText: {
      control: "text",
      defaultValue: " ",
    },
  },
} satisfies Meta<typeof AnimatedTextWord>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hello, Storybook!",
    splitText: " ",
  },
};

export const NoSplitText: Story = {
  args: {
    text: "Hello, Storybook!",
    splitText: "",
  },
};
