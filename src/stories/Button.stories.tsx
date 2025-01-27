import Button from "../app/components/Button/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["Small", "Medium", "Large", "Extra Large"],
    },
    flavours: {
      control: { type: "radio" },
      options: ["Primary", "Success", "Warning", "Danger", "Inverse", "Purple"],
    },
    roundness: {
      control: { type: "radio" },
      options: [
        "Square",
        "Small",
        "Base",
        "Medium",
        "Large",
        "XL",
        "2XL",
        "Circular",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    size: "Small",
    flavours: "Primary",
    roundness: "Base",
  },
};
