import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { event } from "./schemas/event";

export default defineConfig({
  name: "newhaven-ministries",
  title: "New Haven Ministries",
  projectId: "jczf5jq8",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [event],
  },
});
