# Remotion Repros

Minimal TypeScript + React project pinned to Remotion 4.0.356 for reproducing core bugs.

## Setup

```bash
npm install
```

## Scripts

- `npm run studio`: Launches Remotion Studio for development
- `npm run render`: Renders a specific composition (requires `--compositionId=<id>`)
- `npm run lint`: Runs ESLint to check for issues
- `npm run lint:fix`: Runs ESLint fixes and Prettier formatting
- `npm run format`: Formats code with Prettier
- `npm run format:check`: Checks if code is properly formatted
- `npm run typecheck`: Runs TypeScript type checking

## Project Structure

- `src/Root.tsx`: Registers compositions
- `src/repros/`: Directory containing individual repro cases
- `scripts/render.ts`: Automated rendering script with composition validation
- `scripts/_helpers.ts`: Utility functions for argument parsing and composition discovery
- `eslint.config.mjs`: ESLint configuration with import, promise, and prettier rules
- `.prettierrc.json`: Prettier configuration (tabs, 100 char width)

## Creating a Repro

1. Create a new directory under `src/repros/` with a descriptive name
2. Add your repro composition in `src/repros/<name>/index.tsx`
3. Register the composition in `src/Root.tsx`
4. Render with: `npm run render -- --compositionId=<name>`
5. The script will automatically:
   - Validate the composition exists
   - Render the video to `src/repros/<name>/render.mp4`
   - Move the repro zip to `src/repros/<name>/repro.zip`

## Development Workflow

- Pre-commit hooks automatically run ESLint and Prettier on staged files
- Use `npm run lint:fix` to fix issues before committing
- Use `npm run studio` for interactive development
- Use `npm run typecheck` to verify TypeScript types

## Environment

- Node: >= 18 recommended
- OS: macOS
- Remotion: 4.0.356 (pinned)
- TypeScript: 5.6.3
- React: 18.2.0

## Code Quality

- ESLint with import sorting, unused import removal, and promise rules
- Prettier with tabs and 100-character line width
- Husky pre-commit hooks for automated linting
- TypeScript strict mode enabled
