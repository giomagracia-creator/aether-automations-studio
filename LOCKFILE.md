# package-lock.json

The full `package-lock.json` (~225KB) exceeds a single GitHub MCP `push_files` payload from this agent environment.

## Options

1. **Regenerate (recommended):** `npm install` — recreates a lockfile from `package.json`.
2. **Restore from compressed artifact:** if `package-lock.json.gz.b64` is present:
   ```bash
   bash scripts/restore-package-lock.sh
   ```

Pinned top-level versions are in `package.json` (`next@16.3.5`, `react@19.2.8`, `framer-motion`, etc.).
