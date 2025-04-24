# Contributing to Awesome Hosted MCP Servers

Thank you for your interest in contributing to the Awesome Hosted MCP Servers list! This document provides guidelines for contributions to help maintain quality and consistency.

## What Belongs Here?

To be included in this list, submissions must meet the following criteria:

- **Must be an MCP Server**: The service must implement the Model Context Protocol.
- **Must be hosted/managed**: The service must be accessible via a URL endpoint and not require users to download or run code themselves.
- **Network-accessible**: Should primarily use HTTP/SSE or Streamable HTTP transport.
- **Active maintenance**: The service should be actively maintained or in a stable state.
- **Documentation**: Must have documentation on how to access and use the MCP server.

Both free and commercial services are welcome, but please indicate any pricing requirements.

## How to Add a Server

1. **Fork** the repository.
2. **Add your server entry** to the README.md file:
   - Choose only ONE most appropriate category for your server
   - Add your entry at the bottom of that category's section
   - Use the exact format specified below
3. **Commit** your changes.
4. **Open a Pull Request (PR)** and explain why the server fits the list criteria.

## Entry Format

Please use the following format for all entries:

```markdown
### [Service Name](Official Service URL)

- **Offers:** Brief description of what the MCP server provides
- **Access:** Concise instructions on how to get access to the MCP endpoint
```

Example:

```markdown
### [Example MCP](https://example.com)

- **Offers:** Tools for sending emails, managing calendar events, and creating tasks
- **Access:** Sign up at website, navigate to "Integrations" and copy your MCP endpoint URL
```

## Categories

Please add your entry under ONLY ONE of these categories:

- **Aggregators & Integration Platforms**: Platforms connecting multiple services and tools
- **Cloud Platforms**: Major cloud providers with MCP capabilities
- **Databases & Storage**: Database access and storage solutions
- **Data & Analytics**: Data processing, analytics, and visualization
- **Developer Tools**: Tools for developers and software engineering
- **Knowledge & Memory**: Knowledge bases and vector databases
- **Marketing & CRM**: Marketing automation and customer management
- **Search & Data Extraction**: Search engines and information retrieval
- **Communication & Collaboration**: Messaging and team collaboration
- **Media & Content**: Media processing and content management

If your entry doesn't fit into any of these categories, please suggest a new one in your PR.

## Quality Standards

- **Descriptions** should be concise but informative.
- **Links** must be to the official service site, not affiliate links.
- **No promotional language** - focus on objective capabilities.
- **Correct formatting** is required (check the preview of your PR).

## Pull Request Process

1. Ensure your submission follows all guidelines above.
2. Wait for review from maintainers.
3. Be responsive to feedback and requests for changes.
4. Once approved, your contribution will be merged.

Thank you for helping grow this resource for the community!
