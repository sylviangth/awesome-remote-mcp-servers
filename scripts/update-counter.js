#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("Counting MCP servers in README.md...");

try {
  // Read README.md
  const readmePath = path.join(__dirname, "..", "README.md");
  const content = fs.readFileSync(readmePath, "utf8");

  // Count MCP server entries (lines starting with #### [)
  const lines = content.split("\n");
  const mcpServerLines = lines.filter((line) => line.match(/^#### \[.*\]/));
  const count = mcpServerLines.length;

  console.log(`Found ${count} MCP servers`);

  // Update the counter in README.md
  const counterRegex = /🚀 <!-- MCP_COUNT -->.*<!-- \/MCP_COUNT --> 🔥/g;
  const newCounter = `🚀 <!-- MCP_COUNT -->**${count} MCP servers**<!-- /MCP_COUNT --> 🔥`;

  if (content.includes("<!-- MCP_COUNT -->")) {
    let updatedContent = content.replace(counterRegex, newCounter);
    // Update badge count
    updatedContent = updatedContent.replace(
      /MCP%20Servers-\d+-/g,
      `MCP%20Servers-${count}-`
    );
    fs.writeFileSync(readmePath, updatedContent, "utf8");
    console.log(`Updated counter and badge to ${count} MCP servers`);
  } else {
    console.log("Counter placeholder not found in README.md");
    console.log(
      "Please add <!-- MCP_COUNT -->**X MCP servers**<!-- /MCP_COUNT --> to your README.md"
    );
  }

  console.log("Done!");
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
