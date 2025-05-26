# Scripts

This directory contains utility scripts for maintaining the awesome-hosted-mcp-servers repository.

## MCP Server Counter Scripts

These scripts automatically count the number of MCP servers listed in the main README.md and update the counter.

### Available Scripts

#### Bash Script (`update-counter.sh`)

```bash
./scripts/update-counter.sh
```

#### Node.js Script (`update-counter.js`)

```bash
node scripts/update-counter.js
# or if you have it executable:
./scripts/update-counter.js
```

### How It Works

The scripts:

1. Search for all lines in README.md that start with `#### [` (MCP server entries)
2. Count the total number of entries
3. Update the counter between `<!-- MCP_COUNT -->` and `<!-- /MCP_COUNT -->` tags
4. Display the updated count

### Automatic Updates

The repository also includes a GitHub Action (`.github/workflows/update-counter.yml`) that automatically runs the counter update whenever:

- Changes are pushed to the main/master branch that modify README.md
- A pull request is opened that modifies README.md
- The workflow is manually triggered

### Manual Usage

Run either script after adding or removing MCP servers from the README.md to keep the counter accurate:

```bash
# Using bash
./scripts/update-counter.sh

# Using Node.js
node scripts/update-counter.js
```

The counter will be automatically updated in the README.md file.
