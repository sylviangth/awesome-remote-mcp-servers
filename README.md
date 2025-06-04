# Awesome Remote MCP Servers ![alt text](https://awesome.re/badge.svg)

A curated list of remote Model Context Protocol (MCP) Servers accessible via a simple URL endpoint.

🚀 <!-- MCP_COUNT -->**20 MCP servers**<!-- /MCP_COUNT --> 🔥 ready for instant integration!

<div align="center">

![MCP Servers](https://img.shields.io/badge/MCP%20Servers-20-brightgreen?style=for-the-badge&logo=server&logoColor=white)
![Categories](https://img.shields.io/badge/Categories-10-blue?style=for-the-badge&logo=folder&logoColor=white)
![Zero Setup](https://img.shields.io/badge/Zero%20Setup-✅-success?style=for-the-badge&logo=rocket&logoColor=white)
![Instant Integration](https://img.shields.io/badge/Instant%20Integration-⚡-yellow?style=for-the-badge&logo=zap&logoColor=white)

</div>

## Why Hosted Cloud MCP Servers

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) lets AI applications connect to external tools and data for real-world tasks. While developers can run MCP servers locally, hosted cloud options offer significant advantages:

- **Zero setup**: Connect instantly with just a URL and credentials
- **Accessibility**: Enables non-technical users to leverage AI automation with familiar tools
- **Easy integration**: Quickly add powerful functions to AI applications
- **Managed infrastructure**: Benefit from provider-maintained reliability and scalability
- **Seamless sharing**: Distribute AI agents to teammates without individual technical hurdles

This repository showcases these plug-and-play MCP endpoints that can instantly enhance your AI applications. For self-hosted options, see [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers).

## Categories

- 🔗 [Aggregators & Integration Platforms](#agigregators--integration-platforms) - Platforms connecting multiple services and tools
- ☁️ [Cloud Platforms](#cloud-platforms) - Major cloud providers with MCP capabilities
- 🗄️ [Databases & Storage](#databases--storage) - Database access and storage solutions
- 📊 [Data & Analytics](#data--analytics) - Data processing, analytics, and visualization
- 🛠️ [Developer Tools](#developer-tools) - Tools for developers and software engineering
- 🧠 [Knowledge & Memory](#knowledge--memory) - Knowledge bases and vector databases
- 🎯 [Marketing & CRM](#marketing--crm) - Marketing automation and customer management
- 🔎 [Search & Data Extraction](#search--data-extraction) - Search engines and information retrieval
- 💬 [Communication & Collaboration](#communication--collaboration) - Messaging and team collaboration
- 🎥 [Media & Content](#media--content) - Media processing and content management
- 💳 [Payments & Commerce](#payments--commerce) - Payment processing and e-commerce solutions

## Who's Behind This Repo

This repository is maintained by [MindPal](https://mindpal.io) - a no-code platform for building AI agents and multi-agent systems that can be trained on your domain expertise, learn from your knowledge sources, orchestrate sub-agents, use browser automation, and run tools via hosted MCP servers.

See MindPal agents in action with:

- Zapier MCP integration: [Watch demo](https://youtu.be/KgGNbsKzKHk)
- Make MCP integration: [Watch demo](https://youtu.be/GskAd_P5Sgc)
- Composio MCP integration: [Watch demo](https://youtu.be/fM-n2CC8JWU)

## Hosted MCP Servers

### Aggregators & Integration Platforms

#### [Zapier MCP](https://zapier.com/mcp)

- **Offers:** Access to 7,000+ apps with fine-grained control over individual actions
- **Access:** Sign up, create your MCP server, add desired actions, use your unique server URL

#### [Make MCP](https://developers.make.com/mcp-server)

- **Offers:** Turn existing "On Demand" Make Scenarios into tools for AI with bidirectional communication
- **Access:** Create account, set up Scenarios as "On Demand," generate MCP token in Profile page

#### [Composio MCP](https://mcp.composio.dev)

- **Offers:** Multiple server endpoints, each connecting to specific applications with built-in authentication
- **Access:** Create an account, select the applications you want to connect, and receive dedicated MCP server URLs for each integration

#### [Activepieces MCP](https://www.activepieces.com/docs/ai/mcp)

- **Offers:** Turn "Pieces" (single actions) and "Flows" (multi-step workflows) into MCP tools, with configurable inputs and outputs for MCP tools
- **Access:** Use their cloud service or self-host. Go to AI → MCP in your Activepieces Dashboard, start connecting the tools that you want to give AI access to, use your unique server URL

#### [Pipedream MCP](https://mcp.pipedream.com/)

- **Offers:** Access to 2,500+ APIs and 10,000+ integration tools, with dedicated endpoints for each connected service
- **Access:** Create an account, choose your desired integrations, and receive a unique server URL for each of your integrations

#### [n8n MCP Server](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/)

- **Offers:** Turns n8n workflows into MCP tools, allowing AI applications to access n8n's automation capabilities and integration with hundreds of services
- **Access:** Set up the MCP Server Trigger node in your n8n workflow, configure authentication, and use the generated MCP URL to connect

#### [Supermachine Public MCP Servers](https://supermachine.ai/public-mcp-servers)

- **Offers:** Access to 3939+ public MCP servers by spinning up virtual machines that run these MCP servers with minimal configuration
- **Access:** Search and spin up remote MCPs through the Supermachine platform, then use them in your AI applications

### Cloud Platforms

#### [Cloudflare Remote MCP Servers](https://blog.cloudflare.com/mcp-demo-day/)

- **Offers:** Ready-to-deploy MCP server templates with Streamable HTTP transport support and Python language support
- **Access:** Use the "Deploy to Cloudflare" button to quickly deploy your own MCP server instance with a unique URL

### Databases & Storage

_No entries yet_

### Data & Analytics

_No entries yet_

### Developer Tools

#### [Linear MCP](https://linear.app/docs/mcp)

- **Offers:** Access to Linear's project management tools for product development and engineering workflows
- **Access:** OAuth authentication with your Linear account required

#### [Sentry MCP](https://docs.sentry.io/product/sentry-mcp/)

- **Offers:** Error monitoring and debugging information across projects
- **Access:** OAuth authentication with your Sentry account, leverages Sentry's existing permission model

#### [Webflow MCP](https://mcp.webflow.com/)

- **Offers:** CMS management, SEO improvement, content localization, and site publishing
- **Access:** Authentication with your Webflow account credentials required

#### [DeepWiki MCP](https://docs.devin.ai/work-with-devin/deepwiki-mcp)

- **Offers:** Access to GitHub repository documentation and AI-powered search capabilities. Includes tools to read wiki structure, view documentation contents, and ask questions about repositories
- **Access:** Free, remote, no-authentication-required service. Server URLs: `https://mcp.deepwiki.com/sse` (SSE) or `https://mcp.deepwiki.com/mcp` (Streamable HTTP)

#### [GitMCP](https://gitmcp.io/)

- **Offers:** Instant MCP server creation for any GitHub repository by simply changing the domain from github.com to gitmcp.io. Provides AI assistants with deep code context including llms.txt, llms-full.txt, readme.md and more
- **Access:** No setup required. Simply replace `github.com` with `gitmcp.io` in any repository URL to get an instant MCP server endpoint

#### [Semgrep](https://mcp.semgrep.ai)

- **Offers:** Uses the popular open-source security scanner, [Semgrep](https://semgrep.dev), to scan code for vulnerabilities.
- **Access:** A `streamable-http` endpoint is hosted at `https://mcp.semgrep.ai/mcp`. See [docs](https://github.com/semgrep/mcp) for more details.

### Knowledge & Memory

_No entries yet_

### Marketing & CRM

#### [Intercom MCP](https://www.intercom.com/blog/introducing-model-context-protocol-fin/)

- **Offers:** Customer support and engagement functionality through Fin, Intercom's AI agent
- **Access:** OAuth authentication with your Intercom account required

### Search & Data Extraction

#### [Apify Actors MCP](https://apify.com/apify/actors-mcp-server)

- **Offers:** Access to 4,000+ web scraping and automation tools
- **Access:** Requires session-based authentication, follow instructions on website

#### [Firecrawl MCP](https://docs.firecrawl.dev/mcp)

- **Offers:** Web scraping, crawling, and discovery with advanced content extraction, search capabilities, deep research, and structured data extraction using LLM
- **Access:** Server available at `https://mcp.firecrawl.dev/{FIRECRAWL_API_KEY}/sse` with API key authentication required. Get your API key from [firecrawl.dev/app/api-keys](https://firecrawl.dev/app/api-keys)

### Communication & Collaboration

#### [Asana MCP](https://developers.asana.com/docs/using-asanas-model-control-protocol-mcp-server)

- **Offers:** Project management and task coordination through Asana's Work Graph
- **Access:** Server available at `https://mcp.asana.com/sse` with OAuth authentication required

#### [Atlassian MCP](https://www.atlassian.com/blog/announcements/remote-mcp-server)

- **Offers:** Access to Jira and Confluence Cloud data
- **Access:** OAuth authentication required, respects existing Atlassian permission controls

### Media & Content

_No entries yet_

### Payments & Commerce

#### [PayPal MCP](https://developer.paypal.com/tools/mcp-server/)

- **Offers:** Commerce capabilities for inventory management, payment processing, shipping tracking, and refund handling
- **Access:** OAuth authentication with your PayPal account required

#### [Block (Square) MCP](https://developer.squareup.com/docs/mcp)

- **Offers:** Access to Square's APIs for payments, orders, inventory, and customer management
- **Access:** OAuth authentication with your Square account required

## Auto Counter

This repository automatically tracks the number of MCP servers listed. The counter is updated automatically via GitHub Actions whenever the README is modified, or you can run the update scripts manually:

```bash
# Using bash
./scripts/update-counter.sh

# Using Node.js
node scripts/update-counter.js
```

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
