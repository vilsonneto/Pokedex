import type { Meta, StoryObj } from "@storybook/react";
import {
  AnimatedTextWord,
} from "../components/AnimatedTextWord";

const meta = {
  title: "Components/AnimatedTextWord",
  component: AnimatedTextWord,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
