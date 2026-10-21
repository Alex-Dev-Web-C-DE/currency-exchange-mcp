import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "currency-exchange-mcp",
  version: "1.0.0"
});

server.tool(
  "get_exchange_rate",
  {
    from: z.string().describe("Source currency (e.g. USD)"),
    to: z.string().describe("Target currency (e.g. UAH)")
  },
  async ({ from, to }) => {
    const res = await fetch(`https://currency-exchange-api.boring-saas-infra.workers.dev/rate?from=${from}&to=${to}`);
    const data = await res.json();
    return { content: [{ type: "text", text: JSON.stringify(data) }] };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
