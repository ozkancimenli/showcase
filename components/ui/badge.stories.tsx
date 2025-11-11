import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const WithText: Story = {
  args: {
    children: "New",
  },
};

export const WithNumber: Story = {
  args: {
    children: "42",
  },
};

export const Gradient: Story = {
  args: {
    variant: "gradient",
    children: "Gradient",
  },
};

export const Glow: Story = {
  args: {
    variant: "glow",
    children: "Glow",
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    children: "Glass",
  },
};

export const Pulsing: Story = {
  args: {
    variant: "glow",
    pulse: true,
    children: "Pulsing",
  },
};

