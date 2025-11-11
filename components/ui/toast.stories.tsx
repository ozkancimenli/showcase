import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { useToast } from "./use-toast";
import { Toaster } from "./toaster";

function ToastDemo() {
  const { toast } = useToast();

  return (
    <>
      <div className="flex flex-col gap-4">
        <Button
          onClick={() => {
            toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
          }}
        >
          Show Toast
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Error",
              description: "Something went wrong. Please try again.",
            });
          }}
        >
          Show Error Toast
        </Button>
      </div>
      <Toaster />
    </>
  );
}

const meta: Meta<typeof ToastDemo> = {
  title: "Components/Toast",
  component: ToastDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ToastDemo />,
};

