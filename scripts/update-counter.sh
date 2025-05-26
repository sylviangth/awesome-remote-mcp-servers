#!/bin/bash

# Script to count MCP servers and update the counter in README.md

echo "Counting MCP servers in README.md..."

# Count all MCP server entries (lines starting with #### [)
count=$(grep -c "^#### \[.*\]" README.md)

echo "Found ${count} MCP servers"

# Update the counter in README.md
if grep -q "<!-- MCP_COUNT -->" README.md; then
    # Update existing counter
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s/🚀 <!-- MCP_COUNT -->.*<!-- \/MCP_COUNT --> 🔥/🚀 <!-- MCP_COUNT -->**${count} MCP servers**<!-- \/MCP_COUNT --> 🔥/g" README.md
        # Update badge count
        sed -i '' "s/MCP%20Servers-[0-9]*-/MCP%20Servers-${count}-/g" README.md
    else
        # Linux
        sed -i "s/🚀 <!-- MCP_COUNT -->.*<!-- \/MCP_COUNT --> 🔥/🚀 <!-- MCP_COUNT -->**${count} MCP servers**<!-- \/MCP_COUNT --> 🔥/g" README.md
        # Update badge count
        sed -i "s/MCP%20Servers-[0-9]*-/MCP%20Servers-${count}-/g" README.md
    fi
    echo "Updated counter and badge to ${count} MCP servers"
else
    echo "Counter placeholder not found in README.md"
    echo "Please add <!-- MCP_COUNT -->**X MCP servers**<!-- /MCP_COUNT --> to your README.md"
fi

echo "Done!" 