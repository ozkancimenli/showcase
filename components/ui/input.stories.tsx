import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "email@example.com",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
    defaultValue: "Cannot edit",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "Pre-filled value",
  },
};

export const WithError: Story = {
  args: {
    error: true,
    placeholder: "Error state",
    defaultValue: "Invalid input",
  },
};

export const WithSuccess: Story = {
  args: {
    success: true,
    placeholder: "Success state",
    defaultValue: "Valid input",
  },
};

export const WithGlow: Story = {
  args: {
    glow: true,
    placeholder: "Focus for glow effect",
  },
};

