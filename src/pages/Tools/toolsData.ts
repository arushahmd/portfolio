export type ToolItem = {
  name: string; // Name of the tool
  icon?: React.ComponentType<{ className?: string }>; // Optional React icon component
  image?: string; // Optional image path for the tool
  purpose: string; // Short description / purpose of the tool
};

export const toolsData: ToolItem[] = [
  {
    name: "ChatGPT",
    image: " ",
    purpose: "Productivity",
  },
  {
    name: "DeepSeek",
    image: " ",
    purpose: "Research",
  },
  {
    name: "Slack",
    image: " ",
    purpose: "Communication",
  },
  {
    name: "Notion",
    image: " ",
    purpose: "Productivity",
  },
  {
    name: "VSCode",
    image: " ",
    purpose: "IDE",
  },
  {
    name: "Jupyter Notebook",
    image: " ",
    purpose: "ML/Data Science",
  },
  {
    name: "PyCharm",
    image: " ",
    purpose: "IDE",
  },
  {
    name: "Vertex AI",
    image: " ",
    purpose: "Cloud AI",
  },
];
