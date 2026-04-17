import chatgpt from "../../assets/tools-images/chatgpt.png";
import notion from "../../assets/tools-images/notion.png";
import pycharm from "../../assets/tools-images/pycharm.png";
import slack from "../../assets/tools-images/slack.png";
import vertexai from "../../assets/tools-images/vertexai.png";
import vscode from "../../assets/tools-images/vscode.png";
import jupyter from "../../assets/tools-images/jupyter.png";
import deepseek from "../../assets/tools-images/deepseek.png";

// export { chatgpt, notion, pycharm, slack, vertexai };

export type ToolItem = {
  name: string; // Name of the tool
  icon?: React.ComponentType<{ className?: string }>; // Optional React icon component
  image?: string; // Optional image path for the tool
  purpose: string; // Short description / purpose of the tool
};

export const toolsData: ToolItem[] = [
  {
    name: "ChatGPT",
    image: chatgpt,
    purpose: "Productivity",
  },
  {
    name: "DeepSeek",
    image: deepseek,
    purpose: "Research",
  },
  {
    name: "Slack",
    image: slack,
    purpose: "Communication",
  },
  {
    name: "Notion",
    image: notion,
    purpose: "Productivity",
  },
  {
    name: "VSCode",
    image: vscode,
    purpose: "IDE",
  },
  {
    name: "Jupyter Notebook",
    image: jupyter,
    purpose: "ML/Data Science",
  },
  {
    name: "PyCharm",
    image: pycharm,
    purpose: "IDE",
  },
  {
    name: "Vertex AI",
    image: vertexai,
    purpose: "Cloud AI",
  },
];
