# Currency Exchange MCP

MCP server for AI agents to get real-time currency exchange rates.

## Features

- `get_exchange_rate`: Get rate between any two currencies (USD, EUR, UAH, GBP, JPY, and 160+ others).
- No API key required.
- Powered by [open.er-api.com](https://open.er-api.com).

## Installation

```bash
npx currency-exchange-mcp
Usage
Add to your MCP client config (e.g., Claude Desktop):{
  "mcpServers": {
    "currency-exchange": {
      "command": "npx",
      "args": ["-y", "currency-exchange-mcp"]
    }
  }
}Example
Ask your AI: "What is the exchange rate from USD to UAH?"

License
MIT
