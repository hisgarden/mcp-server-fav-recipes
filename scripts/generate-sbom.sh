#!/bin/bash

# Generate Software Bill of Materials (SBOM) for TypeScript MCP Server
# This script generates an SBOM in SPDX format for supply chain security

set -euo pipefail

echo "🔍 Generating SBOM for MCP Server - Favorite Recipes..."

# Create sbom directory if it doesn't exist
mkdir -p sbom

# Generate package-lock.json if it doesn't exist
if [ ! -f "package-lock.json" ]; then
    echo "📦 Generating package-lock.json..."
    npm install
fi

# Generate SBOM using npm-audit-resolver
echo "📋 Generating SPDX SBOM..."
npx @cyclonedx/cyclonedx-npm --output-file sbom/sbom.spdx.json --format spdxjson

# Also generate CycloneDX format
echo "📋 Generating CycloneDX SBOM..."
npx @cyclonedx/cyclonedx-npm --output-file sbom/sbom.cyclonedx.json --format json

# Generate human-readable summary
echo "📊 Generating SBOM summary..."
cat > sbom/sbom-summary.txt << EOF
Software Bill of Materials (SBOM) Summary
=========================================

Generated: $(date -u +"%Y-%m-%d %H:%M:%S UTC")
Project: MCP Server - Favorite Recipes
Version: $(node -p "require('./package.json').version")
Author: $(node -p "require('./package.json').author.name")
License: $(node -p "require('./package.json').license")

Dependencies:
$(npm list --depth=0 --json | jq -r '.dependencies | keys[]' | wc -l) direct dependencies
$(npm list --json | jq -r '.dependencies | keys[]' | wc -l) total dependencies (including transitive)

Security Status:
$(npm audit --audit-level=high --json | jq -r '.metadata.vulnerabilities | to_entries[] | "\(.key): \(.value)"' || echo "No high-severity vulnerabilities found")

Files Generated:
- sbom/sbom.spdx.json (SPDX format)
- sbom/sbom.cyclonedx.json (CycloneDX format)
- sbom/sbom-summary.txt (Human-readable summary)
EOF

echo "✅ SBOM generation complete!"
echo "📁 Files generated in ./sbom/ directory"
echo "🔍 Review sbom/sbom-summary.txt for overview"
