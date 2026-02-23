#!/usr/bin/env bash
# Creates skill links from .claude/skills/ to .agents/skills/ (source of truth).
# Run once after cloning the repo on a new machine.
#
# Usage: bash scripts/setup-skills.sh
#
# macOS/Linux: creates symlinks
# Windows (Git Bash / WSL): creates junctions (mklink /J) or symlinks (mklink /D if admin)

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_DIR="$REPO_ROOT/.agents/skills"
TARGET_DIR="$REPO_ROOT/.claude/skills"

SKILLS=(writer director dreamer builder)

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: $SOURCE_DIR not found. Are you in the right repo?"
  exit 1
fi

mkdir -p "$TARGET_DIR"

for skill in "${SKILLS[@]}"; do
  target="$TARGET_DIR/$skill"
  source="$SOURCE_DIR/$skill"

  if [ ! -d "$source" ]; then
    echo "Warning: $source not found, skipping"
    continue
  fi

  # Remove existing link/directory if present
  if [ -L "$target" ] || [ -d "$target" ]; then
    rm -rf "$target"
  fi

  if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    # Windows: use junction (no admin required, works everywhere)
    win_target=$(cygpath -w "$target")
    win_source=$(cygpath -w "$source")
    cmd //c mklink //J "$win_target" "$win_source" > /dev/null
    echo "  Junction: $skill -> .agents/skills/$skill"
  else
    # macOS / Linux: real symlink with relative path
    ln -s "../../.agents/skills/$skill" "$target"
    echo "  Symlink: $skill -> .agents/skills/$skill"
  fi
done

echo ""
echo "Done. Skills linked in .claude/skills/"
