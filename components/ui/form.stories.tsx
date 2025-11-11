import type { Meta, StoryObj } from "@storybook/react";
import { Form, FormField, FormGroup } from "./form";
import { Input } from "./input";
import { Button } from "./button";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Form className="w-[400px]">
      <FormField label="Email" required>
        <Input type="email" placeholder="email@example.com" />
      </FormField>
      <FormField label="Password" required>
        <Input type="password" placeholder="Enter password" />
      </FormField>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </Form>
  ),
};

export const WithError: Story = {
  render: () => (
    <Form className="w-[400px]">
      <FormField label="Email" required error="Email is required">
        <Input type="email" />
      </FormField>
      <FormField label="Password" required>
        <Input type="password" />
      </FormField>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </Form>
  ),
};

export const WithGroup: Story = {
  render: () => (
    <Form className="w-[400px]">
      <FormGroup>
        <FormField label="First Name" required>
          <Input placeholder="John" />
        </FormField>
        <FormField label="Last Name" required>
          <Input placeholder="Doe" />
        </FormField>
      </FormGroup>
      <FormField label="Email" required>
        <Input type="email" placeholder="email@example.com" />
      </FormField>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </Form>
  ),
};

