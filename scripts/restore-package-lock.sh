#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
base64 -d < "$ROOT/package-lock.json.gz.b64" | gzip -d > "$ROOT/package-lock.json"
echo "Wrote package-lock.json ($(wc -c < "$ROOT/package-lock.json") bytes)"
