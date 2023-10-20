import { definitions } from "./definitions";

export const doc = {
  info: {
    version: "1.0.0",
    title: "e-manager backend",
    description: "Backend do desafio de frontend do Union",
    contact: {
      name: "Leandro Lopes",
      email: "contato.leandrolopes@outlook.com",
      url: "https://www.linkedin.com/in/leandroolopes",
    },
  },
  servers: [
    {
      url: "/",
      description: "Main server",
    },
  ],
  definitions,
};
