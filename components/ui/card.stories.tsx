import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "glass", "gradient", "glow", "elevated"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Glass: Story = {
  render: () => (
    <Card variant="glass" className="w-[350px]">
      <CardHeader>
        <CardTitle>Glass Card</CardTitle>
        <CardDescription>Beautiful glassmorphism effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has a glass effect with backdrop blur.</p>
      </CardContent>
    </Card>
  ),
};

export const Gradient: Story = {
  render: () => (
    <Card variant="gradient" className="w-[350px]">
      <CardHeader>
        <CardTitle>Gradient Card</CardTitle>
        <CardDescription>Beautiful gradient background</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card features a stunning gradient effect.</p>
      </CardContent>
    </Card>
  ),
};

export const Glow: Story = {
  render: () => (
    <Card variant="glow" className="w-[350px]">
      <CardHeader>
        <CardTitle>Glow Card</CardTitle>
        <CardDescription>Card with glow effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has a glowing border effect.</p>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" className="w-[350px]">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>Card that lifts on hover</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Hover over this card to see it lift up!</p>
      </CardContent>
    </Card>
  ),
};

