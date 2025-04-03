import type { Meta, StoryObj } from "@storybook/react";
import { VideoPlayer } from "./HTML5VideoPlayer";
import { within } from "@storybook/test";

const meta = {
  title: "HTML5 Video Player",
  component: VideoPlayer,
} satisfies Meta<typeof VideoPlayer>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Html5VideoPlayer: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    // sleep for 1 second to wait for the player to load
    await step("Wait for player to load", async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    await step("Open up settings menu", async () => {
      const settingsButton = await canvas.findByRole("button", {
        name: "Settings",
      });

      settingsButton.click();
    });
  },
};
