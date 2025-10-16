# Remotion Repros

Minimal TypeScript + React project pinned to Remotion 4.0.356 for reproducing core bugs.

## Scripts

- > remotion-repros@1.0.0 preview
  > remotion preview --root=src --entry-point=src/Root.tsx: Launches Remotion Studio with .
- > remotion-repros@1.0.0 render
  > remotion render --composition=Main --entry-point=src/Root.tsx out/video.mp4: Renders composition to .
- > remotion-repros@1.0.0 render:png
  > remotion render --composition=Main --entry-point=src/Root.tsx --sequence --image-format=png out/frames: Renders frames to as PNGs.

## Project Structure

- : Registers compositions.
- : Minimal composition showing current frame.
- : Minimal deterministic config (no telemetry, set codec & image format).

## Creating a Repro

1. Fork a new branch or copy this folder.
2. Modify (or add new components) to exhibit the behavior.
3. Optionally add a new composition in .
4. Share exact steps (command, OS, node, Remotion version) in the issue.

## Environment

- Node: >= 18 recommended
- OS: macOS
- Remotion: 4.0.356 (pinned)
