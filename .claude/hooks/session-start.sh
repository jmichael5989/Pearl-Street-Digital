#!/bin/bash
set -euo pipefail

# Async mode: run in background for faster session startup (5 min timeout)
echo '{"async": true, "asyncTimeout": 300000}'

# Only run in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

echo "=== Pearl Street Digital: Session Start ==="

# 1. Install dependencies
echo "Installing dependencies..."
npm install --prefer-offline 2>&1

# 2. TypeScript type check
echo ""
echo "=== TypeScript Type Check ==="
if npx tsc --noEmit 2>&1; then
  echo "TypeScript: PASS (zero errors)"
else
  echo "TypeScript: ISSUES FOUND (see above)"
fi

# 3. ESLint code quality
echo ""
echo "=== ESLint Code Quality ==="
if npx eslint . 2>&1; then
  echo "ESLint: PASS (zero errors)"
else
  echo "ESLint: ISSUES FOUND (see above)"
fi

echo ""
echo "=== Session Start Complete ==="
